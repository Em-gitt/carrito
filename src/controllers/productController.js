import { renderProductos } from "../../public/assets/js/products/render-productos";
import { ApiService } from "../models/ApiService";
import { Product } from "../models/Product";


class ProductController {

    constructor() {
        this.products = []
    }

    async cargarProductos() {
        try {
        const apiService = new ApiService();
        const data = await apiService.getProducts();
        this.products = data.map(obj => Product.fromJson(obj));
        renderProductos(this.products);
        } catch (error) {
            console.error('Error al cargar productos:', error);
        }
    }

    filterByCategory(category) {
        const filtered = this.products.filter(p => p.category === category);

    }
    
    searchProducts(query) { 
        const queryLowerCase = query.toLowerCase();
    
        const filtered = this.products.filter(p => p.name.toLowerCase().includes(queryLowerCase));

    }
    
    getFeaturedProducts() {
        const filtered = this.products.filter(p => p.featured);
        return this.products.filter(p => p.featured);
    }
    
    sortByPrice(ascending = true) {
    const ordered = [...this.products].sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
    });

    renderProductos(ordenados);
        
    }


}

export default new ProductController();