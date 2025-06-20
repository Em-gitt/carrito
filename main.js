// import '../css/index.css';
import './public/assets/css/products/products.css'
import './public/assets/css/cart/cart.css'
import { ApiService } from './src/models/ApiService';
import { renderProductos } from './public/assets/js/products/render-productos';
import { ProductController } from './src/controllers/productController';

// Crear instancia del servicio API
const apiService = new ApiService();



// Ejecutar cuando se carga la página
renderProductos();

document.addEventListener('DOMContentLoaded', async () => {
    const productController = new ProductController();
    await productController.loadProducts();
});