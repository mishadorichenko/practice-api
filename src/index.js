import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';
import { createMarkupProducts } from './services/markupService';

const listAllProducts = document.querySelector('#allProducts');

getProducts().then(data => {
  const markup = createMarkupProducts(data.products);
  listAllProducts.innerHTML = markup;
});
