import { useAuth } from "./../context/AuthProvider";
import { BsBoxArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authState");
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      {!user ? (
        <h1 className="text-center my-auto">Please Login</h1>
      ) : (
        <div className="container">
          <button onClick={() => logout()} className="btn-sm fw-bold btn-info">
            Logout <BsBoxArrowRight className="fs-5" />
          </button>
          <div className="card border-0 shadow mt-4 border-radius-2">
            <ul className="list-unstyled p-3">
              <li className="text-center">
                <p>
                  You Logged In As{" "}
                  <strong className="text-capitalize fs-3 fw-bold">
                    {user.name}
                  </strong>
                </p>
              </li>
              <li className="text-center">
                <p>
                  You're Email Is{" "}
                  <strong className=" fs-3 fw-bold">{user.email}</strong>
                </p>
              </li>
              <li className="text-center">
                <p>
                  You're Phone Number Is{" "}
                  <strong className=" fs-3 fw-bold">{user.phoneNumber}</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
