# Example React 18 ecommerce shop with integrated working Stripe payment using Express server

This is a sample eCommerce application built using React 18 that features an integrated Stripe payment system, enabled through an Express server. With a responsive user interface and secure payment gateway, this application serves as a full-stack solution for running an online store.

## Getting Started with Stripe Payment Server with Express

This is an example Express server integrated with Stripe for payment processing. The server handles the checkout process by creating a Stripe session.

### Prerequisites

Node.js and npm installed
Stripe account and Stripe API keys

npm install express cors stripe

#### Server configuration

Replace the Stripe secret key with your own key in server.js line 3:
const stripe = require("stripe")("your_stripe_secret_key_here");

#### Server start

node server.js

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

From the project root directory, got to store directory and run:

#### `npm install`

After installation run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Checkout

For test checkout use test credit card:

4242 4242 4242 4242
12/34           123



The page will reload when you make changes.\
You may also see any lint errors in the console.


