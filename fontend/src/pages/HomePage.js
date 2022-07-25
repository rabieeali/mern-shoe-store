import { products } from "../data/data";
import CardComponent from "../components/CardComponent";
import { getAllProducts } from "./../services/getAllProducts";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Layout from './../Layout/Layout';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await getAllProducts();
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
    <div className="container mt-4">
      <div className="row g-3">
        {loading ? (
          <>
            <ReactLoading
              className="m-auto my-5"
              type={"spinningBubbles"}
              color={"#800080"}
              height={"20%"}
              width={"20%"}
            />
            <p className="swal2-title z-99 text-center">
              Use a VPN If Your Region Is Iran
            </p>
            
          </>
        ) : (
          products.map((p, index) => (
            <div key={index} className="col-md-3">
              <CardComponent
                data={p}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                alt={p.name}
                offPrice={p.offPrice}
                description={p.description}
                off={p.discount}
              />
            </div>
          ))
        )}
      </div>
    </div>

    </Layout>
  );
};

export default HomePage;
