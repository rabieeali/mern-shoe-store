import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartProvider";
import CheckoutCard from "./CheckoutCard";

const Checkout = () => {
  const auth = useAuth();
  const { cart } = useCart();

  return (
    <div className="container">
      {auth ? (
        <>
          <h2 className="text-center display-6 text-capitalize">
            <span className="fw-bold">{auth.name}</span>'s shopping cart list
          </h2>
          <div>
            {cart.length ? (
              cart.map((item) => (
                <CheckoutCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  item={item}
                />
              ))
            ) : (
              <h5 className="text-red text-center my-4 text-capitalize">
                shopping cart is empty!
              </h5>
            )}
          </div>
        </>
      ) : (
        <p>please login first</p>
      )}
    </div>
  );
};

export default Checkout;
