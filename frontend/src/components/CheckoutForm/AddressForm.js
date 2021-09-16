import { Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AddressInput from './AddressInput';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const AddressForm = ({nextStep}) => {
    const methods = useForm();
    const [{ shippingData }, dispatch] = useStateValue();

    return (
        <>
        <Typography variant='h5' gutterBottom>
            shipping address
        </Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(data =>{
                dispatch({
                    type: actionTypes.SET_SHIPPINGDATA,
                    shippingData: data,
                });
                nextStep();
            })}>
                <Grid container spacing={3}>
                    <AddressInput required name="firstName" label="First Name"/>
                    <AddressInput required name="lastName" label="Last Name"/>
                    <AddressInput required name="address" label="Address"/>
                    <AddressInput required name="email" label="Email Address"/>
                    <AddressInput required name="city" label="City"/>
                    <AddressInput required name="postcode" label="Post Code"/>
                </Grid>
                <div style={{display:"flex",justifyContent:"space-between", marginTop:"1rem"}}>
                    <Button component={Link} to="/cart">Back</Button>
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </div>
            </form>
        </FormProvider>
 
        </>
    )
}

export default AddressForm
