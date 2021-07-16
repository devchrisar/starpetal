import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import products from "./itemDetail";
import ItemListContainer from "./itemListContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const data = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
    setTimeout(() => {
      reject("hubo un problema");
    }, 3000);
  });
};

export default function ItemDetailContainer() {
  data()
    .then((products) => console.log(products))
    .catch((error) => console.log(error));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ItemListContainer key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
