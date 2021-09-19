import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import accounting from "accounting";
import "./DetailScreen.scss";
import { MdAttachMoney } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { GiBonsaiTree } from "react-icons/gi";
import ReactImageMagnify from "react-image-magnify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactSlick from "react-slick";
import { Link } from "react-router-dom";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles({
  root: {
    maxWidth: 745,
    minWidth: 225,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  green: {
    color: "#06ba63",
  },
  yellow: {
    color: "#ffc300",
  },
  purple: {
    color: "#722e9a",
  },
  lightgreen: {
    color: "#7ca928",
  },
});

export default function DetailScreen({
  product: {
    id,
    name,
    productType,
    price,
    rating,
    image,
    image2,
    image3,
    description,
    quantity,
  },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const photos = [
    {
      name: "pic01",
      url: `${image}`,
    },
    {
      name: "pic02",
      url: `${image2}`,
    },
    {
      name: "pic03",
      url: `${image3}`,
    },
  ];
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };
  const addtoBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
        quantity,
      },
    });
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hola, bienvenido de vuelta✌</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} className="showDiv">
          <Card>
            <CardActionArea className={classes.root}>
              <CardMedia>
                <ReactSlick {...settings}>
                  {photos.map((photo, index) => (
                    <div key={index}>
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Plant products",
                            isFluidWidth: true,
                            src: photo.url,
                            srcSet: photo.url,
                          },
                          largeImage: {
                            src: photo.url,
                            width: 1200,
                            height: 1800,
                          },
                          lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                        }}
                      />
                    </div>
                  ))}
                </ReactSlick>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className={classes.green}>
                #Plants
                <RiPlantFill />
              </Button>
              <Button size="small" className={classes.yellow}>
                #Buy
                <MdAttachMoney />
              </Button>
              <Button size="small" className={classes.lightgreen}>
                #Garden
                <GiBonsaiTree />
              </Button>
              <Button size="small" className={classes.purple}>
                #Shop
                <FaStore />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <div className="productScreen_Right">
          <div className="Right_info">
            <p>
              Precio: <span>{accounting.formatMoney(price)}</span>
            </p>
            <div className="color__product">
              <p>
                Estado: <span>En stock</span>
              </p>
              <span></span>
              <span></span>
              <span></span>
              <p>Color: </p>
            </div>
            <Button
              color="primary"
              variant="outlined"
              component={Link}
              to="/cart"
              onClick={addtoBasket}
            >
              Finalizar compra
            </Button>
          </div>
        </div>
      </Grid>
    </Container>
  );
}
