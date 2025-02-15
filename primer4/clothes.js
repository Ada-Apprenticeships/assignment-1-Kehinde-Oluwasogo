import Product from "./Product.js";


export class Clothes extends Product {
    constructor(size,material){
        // super(price, quantity)
        this.size = size;
        this.material = material;
    }

    getProductDetails() {
        const baseDetails = super.getProductDetails(); // Get common product details
        return {
          ...baseDetails, // Spread the common details
          size: this.size, // Add size
          material: this.material, // Add material
        };
    }
}