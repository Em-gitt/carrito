import '../css/index.css';
import '../css/products/products.css';
import '../css/cart/cart.css';
import { ApiService } from './src/models/ApiService';
import { renderProductos } from './public/assets/js/products/render-productos';

// Crear instancia del servicio API
const apiService = new ApiService();

// Función para cargar e imprimir productos
async function loadProducts() {
  try {
    console.log('Cargando productos desde JSON Server...');
    
    const products = await apiService.getProducts();
    
    console.log('=== PRODUCTOS DESDE JSON SERVER ===');
    console.log('Productos:', products);
    
    console.log('====================================');
    
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
}

// Ejecutar cuando se carga la página
renderProductos();

const router = new Router();

// Funciones de navegación globales
window.navigateTo = (path) => {
    window.location.hash = path;
};

// Manejar clicks en enlaces
document.addEventListener('click', (e) => {
  console.log("funciona");
  
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const path = e.target.getAttribute('href').slice(1);
        window.navigateTo(path);
    }
});