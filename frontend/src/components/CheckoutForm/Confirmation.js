import { Button, Divider, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const uuid = uuidv4();

export const Confirmation = ({ message }) => {
    return (
        <>
            <Typography variant='h6'>{message}</Typography>
            <Divider />
            <Typography variant='subtitle2' gutterBottom>{message === "Successful Payment" || "Se realizo el pago satisfactoriamente" ? `Your booking reference : ${uuid}`  : ""}</Typography>
            < Button component={Link} to='/' variant='outlined' type='button'>Back to Home Page</Button>
        </>
    )
}

export default Confirmation;