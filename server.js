const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51GzN6SB192lhGTrBYLtzafknCK7mlbHI0rN4no2A9JuosAqR7lLrvfprVFHdomSR8Qb88Ijer4wvRPUqIWYDXcAm00jySeCmVx"
);
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.send(
      JSON.stringify({
        url: session.url,
      })
    );
  } catch (error) {
    console.error("Stripe session creation failed:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(4000, () => console.log("Listening on port 4000"));
