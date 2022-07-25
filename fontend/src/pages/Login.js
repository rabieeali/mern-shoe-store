import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./../services/loginService";
import { toast } from "react-toastify";
import { useAuthActions } from "./../context/AuthProvider";
import ReactLoading from "react-loading";
import { useState } from "react";


const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("email Must Be Valid")
    .required("You Should Have an Email"),
  password: Yup.string().required("You Should Have a Password"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthActions();


  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const { data } = await loginUser(values);
      setAuth(data);
      //*** WE HANDLED IT IN CONTEXT ***//
      // localStorage.setItem("authState", JSON.stringify(data));
      toast.success(`You're Logged In as ${data.name}`);
      navigate("/cart");
    } catch (error) {
      if (error.response && error.response.data.message) {
        if (error.response.data.message === "ایمیل وجود ندارد") {
          toast.error("Email Doesn't Exist!");
        } else if(error.response.data.message === "ایمیل یا رمز عبور اشتباه است") {
          toast.error("Wrong Email or Password!");

        }else{
          
          toast.error(error.response.data.message);
        }
      }
      console.log(error);
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
  <div className="container">
      <h1 className="my-3 text-center">Please Login First</h1>
      <form
        className="bg-form p-3 col-md-5 my-4 m-auto border-radius-2"
        onSubmit={formik.handleSubmit}
      >
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          placeholder=""
          type="password"
        />
        <p className="mt-4 text-warning text-capitalize">
          don't have an account?
          <Link to="/signup">
            <span className="signup-link ms-1">signup here</span>
          </Link>
        </p>
        <button
          className="signup-btn text-white my-2 w-100"
          disabled={!formik.isValid}
          type="submit"
        >
          <div className="d-flex justify-content-center">
            <span>Login</span>
            {loading && (
              <ReactLoading
                className="ms-2"
                type={"spinningBubbles"}
                color={"#fff"}
                height={"4%"}
                width={"4%"}
              />
            )}
          </div>
        </button>
      </form>
    </div>
  

  );
};

export default Login;
