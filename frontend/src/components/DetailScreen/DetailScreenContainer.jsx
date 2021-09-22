import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailScreen from "./DetailScreen";
import axios from "axios";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";

function DetailScreenContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/products/`);
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          {products.map((product) => (
            <DetailScreen key={product.id} product={product}></DetailScreen>
          ))}
        </div>
      )}
    </div>
  );
}
export default DetailScreenContainer;
