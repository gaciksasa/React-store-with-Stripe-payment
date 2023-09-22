const productsArray = [
  {
    id: "price_1NtEJMB192lhGTrBAqv8gBSd", // copy this from your Stripe product
    title: "T-Shirt",
    price: 8.99,
    img: "http://localhost:3000/images/tshirt.jpg",
  },
  {
    id: "price_1NtEJpB192lhGTrBYELN0zZ4", // copy this from your Stripe product
    title: "Sunglasses",
    price: 11.99,
    img: "http://localhost:3000/images/sunglasses.jpg",
  },
  {
    id: "price_1NtEKGB192lhGTrBkr8MOm1B", // copy this from your Stripe product
    title: "Camera",
    price: 208.99,
    img: "http://localhost:3000/images/camera.jpg",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined; // Not needed, but you can do something else if product is not found.
  }
  return productData;
}

export { productsArray, getProductData };
