import apiInstance from '../services/api';

export function getProducts() {
  return apiInstance.get('/products').then(response => response.data);
}

export function getProductById(id) {
  return apiInstance.get(`/products/${id}`).then(response => response.data);
}
