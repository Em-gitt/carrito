

export class Product {

    /**
     * 
     * @param {Like<Cart>} productDataLike 
     */
    constructor( { id, name, price, image, category, description, stock, featured } ){
        if (!id) throw new Error('Product ID is required');
        if (!name || typeof name !== 'string') throw new Error('Product name must be a valid string');
        if (!price || price <= 0) throw new Error('Product price must be greater than 0');
        if (stock < 0) throw new Error('Product stock cannot be negative');
        this.id = id;
        this.name = name;      
        this.price = price;
        this.image = image;
        this.category = category;
        this.description = description;
        this.stock = stock;
        this.featured = featured;

    }

    stockAvailable(){
        return this.stock > 0;
    }

    calculateDiscount = ( discountPercentage ) => {
        return this.price - this.price * discountPercentage / 100;
    }

    static fromJson(data) {
        return new Product(data.name, data.price, data.stock);
    }

    isInStock(quantity = 1) {
        return this.stock >= quantity;
    }

    getTotalPrice(quantity = 1) {
        return this.price * quantity;
    }

    applyDiscount(percentage) {
        if (percentage < 0 || percentage > 100) {
            throw new Error('Discount percentage must be between 0 and 100');
        }
        this.price = this.calculateDiscount(this.price, percentage);
        return this;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            image: this.image,
            category: this.category,
            description: this.description,
            stock: this.stock,
            featured: this.featured
        };
    }

    reduceStock(quantity = 1) {
        if (!this.isInStock(quantity)) {
            throw new Error(`Insufficient stock. Available: ${this.stock}, Requested: ${quantity}`);
        }
        this.stock -= quantity;
        return this;
    }

    restoreStock(quantity = 1) {
        this.stock += quantity;
        return this;
    }

    
}