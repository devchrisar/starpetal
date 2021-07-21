import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import accounting from "accounting";
import { Button, IconButton } from "@material-ui/core";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  cardRating: {
    display: "flex",
  },
}));

export default function CheckoutCard({
  product: { id, name, productType, price, rating, image, description },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id,
    });

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="En Stock"
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardActions disableSpacing className={classes.CardActions}>
        <div className={classes.cardRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <Button type="button" size="small">
          -
        </Button>
        <Typography>5</Typography>
        <Button type="button" size="small">
          +
        </Button>
        <IconButton>
          <DeleteIcon fontSize="large" onClick={removeItem} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
