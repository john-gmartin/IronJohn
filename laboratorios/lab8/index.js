// ITERATION 1

function updateSubtotal(product) {

  let price= product.querySelector('.price span');
  let quantity= product.querySelector('.quantity input').value;
  let subtotal=product.querySelector('.subtotal span');
  let valorPrice= parseFloat(price.innerText);
  let valorSubtotal = valorPrice*quantity;
  subtotal.innerText=valorSubtotal;
  return valorSubtotal
}


  // ITERATION 2 & 3

function calculateAll() {
let productos= document.querySelectorAll('.product')

let valorTotal=0

productos.forEach((products) => {
  valorTotal+=updateSubtotal(products);
  
});
document.querySelector('#total-value span').innerText=valorTotal
}


// ITERATION 4

function removeProduct(event) {
 const target = event.currentTarget;
 const parent= target.parentNode.parentNode;
 parent.parentNode.removeChild(parent);
 calculateAll();
 }


// ITERATION 5

function createProduct() {
  let newProduct = document.querySelector(".create-product input[type='text']");
  let newPrice = document.querySelector(".create-product input[type='number']");
  let newtr = document.createElement('tr');
  newtr.setAttribute("class", "product")
  newtr.innerHTML =   `<td class="name">
                          <span>${newProduct.value}</span>
                        </td>
                        <td class="price">$<span>${newPrice.value}</span></td>
                        <td class="quantity">
                          <input type="number" value="0" min="0" placeholder="Quantity"/>
                        </td>
                        <td class="subtotal">$<span>0</span></td>
                        <td class="action">
                          <button class="btn btn-remove">Remove</button>
                        </td>`;
  let tbody = document.querySelector('tbody');
  tbody.appendChild(newtr);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
  button.addEventListener('click', removeProduct)});

  newProduct.value = ""
  newPrice.value = 0

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
    button.addEventListener('click', removeProduct);

  });

  let createBtn= document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
  
});
