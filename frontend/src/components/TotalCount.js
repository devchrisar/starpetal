import React from 'react'
import accounting from "accounting";
import { Button, makeStyles } from '@material-ui/core';
import {getTotalBasket} from '../reducer'
import {getTotalQty} from '../reducer'
import { useStateValue } from "../StateProvider";
import { CgShoppingBag } from "react-icons/cg";

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh'
},
button: {
    marginTop: '2rem',
    marginBottom: '2rem'
},
title: {
    marginTop: '5rem',
}
}))



const TotalCount = () => {
    const classes = useStyles()
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className={classes.root}>
            <h5 className={classes.title}>Total items: {getTotalQty(basket)}</h5>
            <h5>{accounting.formatMoney(getTotalBasket(basket))}</h5>
            <Button className={classes.button} variant="contained" color="secondary"><CgShoppingBag size="1.5rem" /> Comprar | {accounting.formatMoney(getTotalBasket(basket))} </Button>
            
        </div>
    )
}

export default TotalCount
