import { useCartContextActions } from "../context/CartProvider";
import { ADD_TO_CART, DELETE_FROM_CART } from "../context/actionTypes";
import { BsCartPlusFill, BsFillTrashFill } from "react-icons/bs";

const HorizntalCardComponent = ({
  image,
  name,
  price,
  quantity,
  item,
  description,
  off,
}) => {
  const dispatch = useCartContextActions();
  const incHandler = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const decHandler = () => {
    dispatch({ type: DELETE_FROM_CART, payload: item });
  };

  return (
    <div className="card shadow border-0 rounded-2 p-3 mb-3">
      <div className="row g-0">
        <div className="col-md-4 horizontal-card">
          <img
            className="img-fluid p-1 w-100 shadow border-radius-2 h-100"
            src={image}
            alt={name}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title fw-bold text-danger fs-3">{name}</h5>
            <p className="card-text">
              <strong className="text-info">Price &nbsp;</strong>
              {price * quantity}$
            </p>
            {off !== 0 ? (
              <p className="card-text">
                <strong className="text-info">Discount &nbsp;</strong>
                Overall: <span className="text-warning"> {off * quantity}%</span> (Each : {off }%) 
              </p>
            ) : (
              ""
            )}
            <p className="">
              <strong className="text-info">Quantity &nbsp;</strong>
              {quantity}
            </p>
            <p className="">
              <strong className="text-info">Description &nbsp;</strong>
              {description}
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row g-2 my-auto">
            <button
              onClick={() => incHandler(item)}
              className="btn-sm btn-success fw-bold"
            >
              <div className="d-flex justify-content-center align-align-items-center fs-5">
                <BsCartPlusFill className="mt-1" />
                <span className="mx-1">Add</span>
              </div>
            </button>
            <button
              onClick={() => decHandler(item)}
              className="btn-sm btn-danger fw-bold"
            >
              <div className="d-flex justify-content-center align-align-items-center fs-5">
                <BsFillTrashFill className="mt-1"/>
                <span className="mx-1">Remove</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizntalCardComponent;
