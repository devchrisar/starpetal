import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./itemListContainer";
import LoadingBox from "./LoadingBox/LoadingBox";
import MessageBox from "./MessageBox/MessageBox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
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
        <div className={classes.root}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Product key={product.id} product={product}></Product>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
