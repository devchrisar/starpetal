import { Button, CircularProgress, Divider, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Review from './Review'
import { Elements, CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { actionTypes,getTotalBasket } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import accounting from 'accounting';
require('dotenv').config({ path: '../../../../.env' });


const stripePromise = loadStripe('process.env.STRIPE_KEY');

const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode:true,
    style:{
        base:{
            iconColor:"rgb(240, 57, 122)",
            color: "#333",
            fontSize: "18px",
            "::placeholder": {
                color:"#ccc",
            },
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238",
            },
        },
    },
};
const CheckoutForm = ({backStep,nextStep}) => {
    const [{ basket,paymentMessage }, dispatch] = useStateValue();
    const [loadingbtn, setLoadingbtn] = useStateValue(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });
        setLoadingbtn(true);
        if (!error) {
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post("http://localhost:3001/api/checkout",{
                    id,
                    amount: getTotalBasket(basket) * 100,
            });
            dispatch({
                type: actionTypes.SET_PAYMENT_MESSAGE,
                paymentMessage: data.message,
            });
            if (data.message === "Successful Payment" || "Se realizo el pago satisfactoriamente") {
                dispatch({
                    type: actionTypes.EMPTY_BASKET,
                    basket: [],
                }); 
            }
            elements.getElement(CardElement).clear();
            nextStep();
            }
            catch (err) { console.log(error); nextStep(); 
            }
            setLoadingbtn(false);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS}/>
            <div style={{display:'flex', justifyContent:'space-between',marginTop:'1rem'}}>
            <Button variant="outlined" onClick={backStep}>Back</Button>
            <Button disabled={!stripe} type="submit" variant="contained" color="primary">
                {
                    loadingbtn ? (<CircularProgress/>) : (`Pay`)
                }
            </Button>
            </div>
        </form>
    )
}

const PaymentForm = ({backStep,nextStep}) => {
    return (
        <>
            <Review />
            <Divider />
            <Typography variant="h6" gutterBottom style={{margin: "20px 0"}}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <CheckoutForm backStep={backStep} nextStep={nextStep} /> 
            </Elements>  
        </>
    )
}

export default PaymentForm
