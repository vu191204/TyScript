import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "~/api/product";
import { TProduct } from "~/interfaces/Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(`${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <div className="product">
        <div className="row">
          <div className="col-md-6 mb-3">
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>{product?.title}</h2>
            <p>Gia: {product?.price}</p>
            <p>{product?.description}</p>
            <button className="btn btn-primary w-100">Thêm vào giỏ hàng</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="row">
              {product?.images &&
                product.images.map((item, index) => (
                  <div key={index} className="col-4">
                    <img
                      src={item}
                      alt={`Thumbnail ${index + 1}`}
                      className="img-fluid smaller-image"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
