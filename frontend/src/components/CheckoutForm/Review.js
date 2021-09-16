import {List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';
import { getTotalBasket } from '../../reducer';
import accounting from 'accounting';


export const Review = () => {
    const [{ basket },dispatch] = useStateValue();
    return (
        <>
            <Typography variant='h6' gutterBottom>
                Order Summary      
            </Typography>
            <List disablePadding>
                    {
                        basket?.map(product =>(
                            <ListItem key={product.name}>
                                <ListItemText primary={product.name} secondary={`Qty : ${product.quantity}`} />
                                <Typography variant='body2'>
                                {accounting.formatMoney(product.price)}
                                </Typography>
                            </ListItem>
                        ))
                    }
                    <ListItem>
                        <ListItemText primary="Total" />
                        <Typography variant='subtitle1'>
                            {accounting.formatMoney(getTotalBasket(basket))}
                        </Typography>
                    </ListItem>
            </List> 
        </>
    )
}

export default Review;