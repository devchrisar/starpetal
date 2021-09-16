import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import Review from './Review'
import { Elements, CardElement,useStripe,useElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
require('dotenv').config();

const stripePromise = loadStripe("process.env.STRIPE_KEY")

const CheckoutForm = ({backStep,nextStep}) => {
    return(
        <form>
            <CardElement/>
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
