import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {AddShoppingCart} from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Counter from './buttonCounter';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function ItemListContainer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
            >
                {50}
            </Typography>
          }
        title="LIRIO DE AGUA"
        subheader="En Stock"
      />
      <CardMedia
        className={classes.media}
        image="https://www.elmueble.com/medio/2019/03/27/cala-o-zantedeschia_8fdc8026_800x800.jpg"
        title="Planta"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          planta
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" >
          <AddShoppingCart fontSize="large" />
        </IconButton>
        <Counter />
        {Array(4)
        .fill()
        .map((_,i)=>(
          <p>&#11088;</p>
          ))
        }
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          La Cala es una planta herbácea vivaz que vegeta a expensas de un tallo carnoso subterráneo. Cada año rebrota ofreciendo sus delicadas flores a mediados de primavera. La Cala necesita un suelo húmedo y su ubicación ideal es a la sombra. El riego debe ser abundante, sobre todo durante la época de floración, y nulo durante el invierno, que es su época de reposo.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
