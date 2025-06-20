

export class Cart {

    /**
     * 
     * @param {Like<Cart>} cartDataLike 
     */
    constructor( { id, name, price, image, category, category, description, stock, featured } ){
        this.id = id;
        this.name = name;      
        this.price = price;
        this.image = image;
        this.category = category;
        this.description = description;
        this.stock = stock;
        this.featured = featured;

    }
}