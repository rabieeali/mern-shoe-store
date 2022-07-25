import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useCart } from "../context/CartProvider";
import { useAuth } from "./../context/AuthProvider";
import { BsPerson } from "react-icons/bs";

const NavigationBar = () => {
  const { cart } = useCart();
  const userData = useAuth();
  let activeClassName = "activeLink";

  return (
    <>
      <Navbar
        className="mb-5 bg-blur shadow position-sticky top-0 text-center p-1"
        bg="light"
        expand="sm"
        style={{ zIndex: "999" }}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="font-logo">
            <img src={require("../logo/logo.png")} alt="logo" /> &nbsp;
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex text-centerg-3 p-2 w-100">
              <NavLink
                style={{ padding: "10px", color: "black" }}
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Home
              </NavLink>
              <NavLink
                style={{
                  padding: "10px",
                  position: "relative",
                  color: "black",
                }}
                to="/cart"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Cart
                {/* badge */}
                <span className="position-absolute top-0 start-100 translate-middle rounded-pill bg-danger badge">
                  {cart.length}
                </span>
                {/* badge */}
              </NavLink>
              <NavLink
                style={{ padding: "10px", color: "black" }}
                to={userData ? "/profile" : "/login"}
                className="ms-lg-auto login-signup "
              >
                {userData ? (
                  <div className="d-flex justify-content-center align-items-center">
                    <BsPerson className="fs-5 mx-1" />
                    <span>{userData.name}</span>
                  </div>
                ) : (
                  "Login/Signup"
                )}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
