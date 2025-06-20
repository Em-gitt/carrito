import productController, { ProductController } from "../../../../src/controllers/productController";


export const renderProductos = async(products) => {
    console.log("hola");

    
    const container = document.getElementById('productsGrid');
    if (!container) return;

    hideStates(container);

    if (!products) {
        showLoadingState(container);
        return;
    }

    if (products.length === 0) {
        showEmptyState(container);
        return;
    }

    container.innerHTML = ''; 

    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });

}

const showLoadingState = () => {
    // document.getElementById('emptyState').style= 'display: none;'
    document.getElementById('loadingState').style= 'display: block;'
}

const showEmptyState = () => {
    // document.getElementById('loadingState').style= 'display: none;'
    document.getElementById('emptyState').style= 'display: block;'
}

const hideStates = () => {
  document.getElementById('loadingState').style= 'display: none;'
  document.getElementById('emptyState').style= 'display: none;'

}

const createProductCard = (product) => {
  const card = document.createElement('div');
  card.className = 'product-card';

  if (!product.inStock) card.classList.add('out-of-stock');
  if (product.featured) card.classList.add('featured');

  card.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p class="price">$${product.price}</p>
  `;

  return card;
}