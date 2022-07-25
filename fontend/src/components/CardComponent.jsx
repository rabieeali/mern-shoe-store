import React from "react";
import { useCart, useCartContextActions } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CardComponent = ({
  data,
  name,
  price,
  alt,
  image,
  id,
  offPrice,
  description,
  off,
}) => {
  const { cart } = useCart();
  const dispatch = useCartContextActions();
  const navigate = useNavigate();


const inCart = (cart, product) => {
    return cart.find((el) => el.id === product.id);
  };

  const addProducHandler = (data, id) => {
    const itemId = cart.find((c) => c.id === id);
    if (!itemId) {
      dispatch({ type: "ADD_TO_CART", payload: data });
      toast.success(`${data.name} Added To Cart!`);
    } else {
      navigate("/cart");
    }
  };

  return (
    <>
      <div className="card border-radius-1 shadow-lg border-0 h-100">
        {off!==0 ?<span className="off">{off}% OFF</span>:""}
        <img
          src={image}
          className="border-radius-2 p-2 card-img-top"
          alt={alt}
        />
        <div className="card-body d-flex flex-column">
          <h4 className="card-title fw-bold">{name}</h4>
          <div className="card-text">
            <div>
              <strong className="text-info">Price &nbsp;</strong>
              <span className="fs-5 me-2">{offPrice}$</span>
              {price-offPrice !== 0 ? (
                <span className="text-decoration-line-through text-danger">
                  {price}$
                </span>
              ) : ""}
            </div>
            <div>
              <strong className="text-info text-capitalize">
                description &nbsp;
              </strong>
              <span className="fs-5 me-2">
                {description.slice(0, 100) + "..."}
              </span>
            </div>
          </div>

          <button
            className={`btn w-100 mt-auto text-white  ${
              inCart(cart, data) ? "btn-success" : "bg-info"
            }`}
            onClick={() => addProducHandler(data, id)}
          >
            {inCart(cart, data) ? "Checkout" : "Add to cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
