import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { TProduct } from "../interfaces/Product";

type Props = {
  products: TProduct[];
};

const Home: React.FC<Props> = ({ products }) => {
  return (
    <div className="container">
      <h1 className="my-4">Home</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
              </Link>
              <div className="card-body">
                <Link
                  to={`/shop/${product.id}`}
                  className="text-decoration-none"
                >
                  <h5 className="card-title">{product.title}</h5>
                </Link>
                <p className="card-text">{product.description}</p>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price: ${product.price}
                </h6>
                <Link
                  to={`/shop/${product.id}`}
                  className="btn btn-primary w-100"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
