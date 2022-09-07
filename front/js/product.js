let params = new URL(document.location).searchParams;
let id = params.get('id');
let urlProducts = 'http://localhost:3000/api/products/';
urlProducts += id;

let colorId = document.getElementById('colors');
let quantity = document.getElementById('quantity');

function addMsgBox() {
  let msg = document.getElementsByTagName('article');
  for (let message of msg) {
    let box = document.createElement('div');
    box.style.border = "1px solid black";
    box.style.borderRadius = "10px";
    box.style.width = "400px";
    box.style.marginTop = "50px";
    box.style.textAlign = 'center';
    box.style.backgroundColor = "green";
    box.innerText = 'Votre produit a bien été ajouté au panier';
    message.appendChild(box)

    setTimeout(() => {
      box.remove();
    }, "1500")

  }
}


function saveCart(Cart){
  localStorage.setItem("Cart", JSON.stringify(Cart));
}


function getCart() {
  let Cart = localStorage.getItem("Cart");

  if (Cart == null) {
    return [];
  }else {
    return JSON.parse(Cart);
  }
}


function addCart(product) {

  let Cart = getCart();


  // let foundProduct = Cart.find(p => p.id == product.id && p.color == product.color);



  // let foundProduct = Cart.find(function(p){
  //   return p.id == product.id && p.color == product.color
  // });



  function isCurrentProduct(produit){
    return produit.id == product.id && produit.color == product.color
  }

  let foundProduct = Cart.find(isCurrentProduct);

  if (foundProduct != undefined) {
    // foundProduct = obj;
    // foundProduct.quantity++ + product.quantity;
    // product.quantity;
    // parseInt(quantity.value);
    
    foundProduct.quantity += parseInt(product.quantity);
  }else {
    Cart.push(product);
  }

  saveCart(Cart);
}









function addImage(product) {
  let items__img = document.getElementsByClassName('item__img');

  for (let image of items__img) {
    let img = document.createElement('img');
    img.src = product.imageUrl;
    img.alt = product.altTXT;
    image.appendChild(img);
  }
}


function addName(titleText) {
  let title = document.getElementById('title');
  title += title.innerText = titleText;
}


function addPrice(price) {
  let priceElement = document.getElementById('price');
  priceElement.innerHTML = price;
}


function addDescription(description) {
  let descriptionElement = document.getElementById('description');
  descriptionElement.innerText = description;
}


function addColorsOptions(colorslist) {

  for (let color of colorslist) {
    let colorsOptions = document.createElement('option');
    colorsOptions.value = color;
    colorsOptions.innerText = color;
    colorId.appendChild(colorsOptions);
  }
}


fetch(urlProducts)
  .then(function (res) {

    if (res.ok) {
      return res.json();
    }
  })

  .then(function (productFromApi) {


    addProductToCart(productFromApi);

    addImage(productFromApi);

    addName(productFromApi.name);

    addPrice(productFromApi.price);

    addDescription(productFromApi.description);

    addColorsOptions(productFromApi.colors);


  })

  .catch(function (err) {
    console.log(err)
    console.log("Une erreur est survenue")
  })


function addProductToCart(product) {
  let addToCart = document.getElementById('addToCart');

  addToCart.addEventListener('click', function () {
 

    addMsgBox();
let obj = {
  id: id,
  color: colorId.value,
  quantity: parseInt(quantity.value)
}
addCart(obj);

   }) 
}
