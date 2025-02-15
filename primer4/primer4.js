import Product from "./Product.js";
import Inventory from "./Inventory.js";
import {Clothes} from "./clothes.js"
import {Electronics} from "./electronics.js"

// Sample usage
const inventory = new Inventory();
// const product1 = new Product("A123", "T-shirt", 19.99, 100);
// const product2 = new Product("B456", "Jeans", 49.99, 50);
const shirt = new Clothes ("A123", "T-shirt", 19.99, 100,"M", "Satin")

try {
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  inventory.updateQuantity("A123", 50);
  const retrievedProduct = inventory.getProduct("B456");
  console.log(retrievedProduct);
  inventory.removeProduct("A123");
} catch (error) {
  console.error("An error occurred:", error.message);
}

console.log(shirt.id);
