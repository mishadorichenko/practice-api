import apiInstance from '../services/api';

export function getProducts() {
  return apiInstance.get('/products').then(response => response.data);
}
