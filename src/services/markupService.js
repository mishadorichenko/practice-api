export function createMarkupProducts(arr) {
  const markup = arr
    .map(
      ({ brand, title, price, thumbnail }) => `<li class="product-item">
        <img src="${thumbnail}" alt="" class="product-image">
        <h3 class="product-brand">${brand}</h3>
        <p class="product-model">${title}</p>
        <p class="product-price">${price}</p>
      </li>`
    )
    .join('');
  return markup;
}

export function createMarkupSingleProduct({ brand, title, price, thumbnail }) { 
     return  `<div class="product-item">
        <img src="${thumbnail}" alt="" class="product-image">
        <h3 class="product-brand">${brand}</h3>
        <p class="product-model">${title}</p>
        <p class="product-price">${price}</p>
      </div>` 
}
