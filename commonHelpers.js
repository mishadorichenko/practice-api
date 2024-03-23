import{a as i}from"./assets/vendor-a2e8d7fa.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=i.create({baseURL:"https://dummyjson.com"});function l(){return u.get("/products").then(r=>r.data)}function a(r){return r.map(({brand:s,title:n,price:e,thumbnail:t})=>`<li class="product-item">
        <img src="${t}" alt="" class="product-image">
        <h3 class="product-brand">${s}</h3>
        <p class="product-model">${n}</p>
        <p class="product-price">${e}</p>
      </li>`).join("")}const d=document.querySelector("#allProducts");l().then(r=>{const o=a(r.products);d.innerHTML=o});
//# sourceMappingURL=commonHelpers.js.map
