import express from 'express';
import data from './itemDetail.js';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config()
const app = express();
const stripe = new Stripe('process.env.STRIPE_PRIV_KEY');

app.get('/api/products', (req, res) => {
    res.send(data.products);
})
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x.id == req.params.id);
    if (product) {
        res.send(product);
    }else{
        res.status(404).send({ message: "Product not found." });
    }
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

//!middlewares
app.use(cors({Origin:"http://localhost:3000"}));
app.use(express.json());

app.post("/api/checkout", async (request, response) => {
  const { id, amount } = request.body;
  try{
      const payment =  await stripe.paymentIntents.create({ 
          amount: amount,
          currency: "USD",   
          description: "products",
          payment_method: id,
          confirm: true,
      }); 
      console.log(payment); 
      return response.status(200).json({message: "Se realizo el pago satisfactoriamente"});
  }catch(error){
      console.log(error);
      return response.json({ message: error.raw.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});