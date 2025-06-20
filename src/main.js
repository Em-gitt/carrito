import './style.css'

// src/main.js
import { ApiService } from './models/apiService';

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
loadProducts();