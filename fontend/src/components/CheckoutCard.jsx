import { toast } from "react-toastify";
const CheckoutCard = ({ image, name, price, quantity, item }) => {
  const pay = () => {
    toast.info(
      "I will Write The Procedure Once It's Used By an Actual Bussiness!"
    );
  };

  return (
    <div className="container">
      <div className="row my-4">
        <div className="card shadow border-0 border-radius-2 mb-3 bg-mellow-yellow">
          <div className="row my-auto g-0">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid custom-img w-100 text-center m-auto"
                alt={name}
              />
            </div>
            <div className="col-md-8  my-auto">
              <div className="card-body text-capitalize">
                <h4 className="card-title">
                  ({quantity}) - {name} ({price}$)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={pay} className="btn btn-success w-100">
        Pay
      </button>
    </div>
  );
};

export default CheckoutCard;
