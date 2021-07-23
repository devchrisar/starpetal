import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import CheckoutCard from "../CheckoutCard/CheckoutCard";
import TotalCount from "../TotalCount";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const isEmpty = !basket.length;

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      No hay nada en el carrito, vuelve cuando hallas cosechado una planta🌼
    </Typography>
  );

  const clearCart = () => {
    return dispatch({ type: actionTypes.CLEAR_CART });
  };

  function Formrow() {
    return (
      <React.Fragment>
        {basket?.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <CheckoutCard key={item.id} product={item} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom variant="h4">
              Carrito
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={9} container spacing={2}>
            <Formrow />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography align="center" gutterBottom variant="h4">
              <TotalCount />
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              onClick={clearCart}
            >
              Limpiar
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default CheckoutPage;
