import HorizntalCardComponent from "../components/HorizntalCardComponent";
import { useCart } from "../context/CartProvider";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const CartPage = () => {
  const { cart, total, discount } = useCart();
  const userData = useAuth();
  return (
    <>
      {!cart.length ? (
        <h1 className="text-danger text-center">
          There is no item in the cart!
        </h1>
      ) : (
        <div className="container my-4">
          <div className="row">
            <div className="col-md-8">
              {cart.map((item) => (
                <HorizntalCardComponent
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  description={item.description}
                  off={item.discount}
                  item={item}
                />
              ))}
            </div>
            {/* checkout */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Buy</div>
                <div className="card-body">
                  <p className="card-title">
                    Total Price: {total + discount} ${" "}
                  </p>
                  <p className="card-text">Discount: {discount} $</p>
                  <hr />
                  <h5 className="card-text my-3">Final Price:{total} $</h5>
                  <Link to={userData ? "/checkout" : "/login"}>
                    <button className="btn btn-purple w-100">Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* checkout */}
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
