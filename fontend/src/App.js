import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import AuthProvider from "./context/AuthProvider";
import CartProvider from "./context/CartProvider";
import NavigationBar from "./components/NavigationBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import Footer from "./components/Footer";

console.clear();

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <CartProvider>
            <ToastContainer />
            <Layout>
              <NavigationBar/>
              <Routes>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer/>
            </Layout>
          </CartProvider>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
