import Product from "./Product.js";


class Electronics extends Product {
    constructor(brand,warranty){
        this.brand = brand;
        this.warranty = warranty;
    }

    getProductDetails(){
        const baseDetails = super.getProductDetails()
        return{
            ...baseDetails,
            brand: this.brand,
            warranty: this.warranty,

        };
    }
}