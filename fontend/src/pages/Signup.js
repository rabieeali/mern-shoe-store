import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "./../services/signupService";
import { toast } from "react-toastify";
import { useAuthActions } from "./../context/AuthProvider";
import { useState } from "react";
import ReactLoading from "react-loading";


const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(6, "Must Be 6 Charachters Or More")
    .required("You Should Have a Name"),
  email: Yup.string()
    .email("email Must Be Valid")
    .required("You Should Have an Email"),
  phoneNumber: Yup.string().required("You Should Have a Phone Number"),
  password: Yup.string()
    .required("You Should Have a Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirm: Yup.string()
    .required("You Should Have a Password Confirmation")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthActions();

  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      setLoading(true);
      const { data } = await signupUser(userData);
      setAuth(data);
      //*** WE HANDLED IT IN CONTEXT ***//
      // localStorage.setItem("authState", JSON.stringify(data));
      toast.success(`You Signed Up as ${data.name}`);
      navigate("/cart");
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
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
      <form
        className="bg-form p-3 col-md-5 my-4 m-auto border-radius-2"
        onSubmit={formik.handleSubmit}
      >
        <Input
          formik={formik}
          name="name"
          label="Name"
          placeholder="ali rabiee"
        />
        <Input
          formik={formik}
          name="email"
          label="Email"
          placeholder="example@sth.com"
          type="email"
        />
        <Input
          formik={formik}
          name="phoneNumber"
          label="Phone"
          placeholder="09121234567"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="Password"
          placeholder=""
          type="password"
        />
        <Input
          formik={formik}
          name="confirm"
          label="Confirm Password"
          placeholder=""
          type="password"
        />
        <p className="mt-4 text-warning">
          Already a Member?
          <Link to="/login">
            <span className="login-link ms-1">Login Here</span>
          </Link>
        </p>

        <button
          className="signup-btn text-white my-2 w-100"
          disabled={!formik.isValid}
          type="submit"
        >
          <div className="d-flex justify-content-center">
            <span>Signup</span>
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

export default Signup;
