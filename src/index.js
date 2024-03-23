import './styles/normalize.css';
import './styles/index.css';
import { getProducts, getProductById } from './requests/products';
import { createMarkupProducts, createMarkupSingleProduct } from './services/markupService';


const listAllProducts = document.querySelector('#allProducts');
const singleProduct = document.querySelector('#singleProduct');
const form = document.querySelector('#singleProductForm');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const id = e.currentTarget.elements.id.value;
  getProductById(id).then(data => {
    console.log(data);
    const markup = createMarkupSingleProduct(data);
  singleProduct.innerHTML = markup;
});
}

// getProducts().then(data => {
//   const markup = createMarkupProducts(data.products);
//   listAllProducts.innerHTML = markup;
// });
