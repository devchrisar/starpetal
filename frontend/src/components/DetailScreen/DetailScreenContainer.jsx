import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DetailScreen from "./DetailScreen";
import axios from "axios";

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (err) {}
    };
    fetchData();
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <DetailScreen key={product.id} product={product}></DetailScreen>
      ))}
    </div>
  );
}
