const functions = require("firebase-functions");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createPaymentLink = functions.https.onRequest((request, response) => {
  if (request.method !== "POST") {
    response.status(405).send("HTTP Method " + request.method + " not allowed");
    return;
  }

  const body = JSON.parse(request.body);
  const {products} = body;

  const lineItems = products.map((product) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    };
  });

  stripe.paymentLinks
      .create({
        line_items: lineItems,
        mode: "payment",
        success_url: "https://yourdomain.com/success",
        cancel_url: "https://yourdomain.com/cancel"})
      .then((paymentLink) => {
        response.json({url: paymentLink.url});
      })
      .catch((error) => {
        response.status(500).send(error);
      });
});
