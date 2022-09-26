// Récupération de l'ID compris dans l'URL de la page, ajouté via la page script, dans l'élément article

let params = new URL(document.location).searchParams;
let id = params.get('id');
let urlProducts = 'http://localhost:3000/api/products/';
urlProducts += id;


let colorId = document.getElementById('colors');
let quantity = document.getElementById('quantity');


// Création d'un message de confirmation d'ajout au panier d'un produit au moment du clic, affiché durant 1,5s

function addMsgBox(boxMessageContent) {
  let msg = document.getElementsByTagName('article');
  for (let message of msg) {
    let box = document.createElement('div');
    box.style.border = "1px solid black";
    box.style.borderRadius = "10px";
    box.style.width = "400px";
    box.style.marginTop = "50px";
    box.style.textAlign = 'center';
    box.style.backgroundColor = "green";
    box.innerText = boxMessageContent;
    message.appendChild(box)

    setTimeout(() => {
      box.remove();
    }, "2000")

  }
}


// Sauvegarde du panier dans le localStorage

function saveCart(Cart) {
  localStorage.setItem("Cart", JSON.stringify(Cart));
}


//Récupération du panier enregistré dans localStorage

function getCart() {
  let Cart = localStorage.getItem("Cart");

  if (Cart == null) {
    return [];
  } else {
    return JSON.parse(Cart);
  }
}

// Ajout d'un produit au panier stocké dans le localStorage, avec incrémentation si le produit est déja présent

function addCart(product) {

  let Cart = getCart();

  let foundProduct = Cart.find(p => p.id == product.id && p.color == product.color);
console.log(Cart.find(p => p.id))
  // let foundProduct = Cart.find(function(p){
  //   return p.id == product.id && p.color == product.color
  // });



  // function isCurrentProduct(produit) {
  //   return produit.id == product.id && produit.color == product.color
  // }

  // let foundProduct = Cart.find(isCurrentProduct);

  if (foundProduct != undefined) {

    foundProduct.quantity += parseInt(product.quantity);
    console.log(foundProduct)
    
  } else {
    Cart.push(product);
  }

  saveCart(Cart);
}







// Ajout de l'image du produit, récupérée via l'API

function addImage(product) {
  let items__img = document.getElementsByClassName('item__img');

  for (let image of items__img) {
    let img = document.createElement('img');
    img.src = product.imageUrl;
    img.alt = product.altTXT;
    image.appendChild(img);
  }
}

// Ajout du nom du produit, récupéré via l'API

function addName(titleText) {
  let title = document.getElementById('title');
  title += title.innerText = titleText;
}

// Affichage du prix du produit, récupéré via l'API

function addPrice(price) {
  let priceElement = document.getElementById('price');
  priceElement.innerHTML = price;
}

// Ajout de la description produit, récupérée via l'API

function addDescription(description) {
  let descriptionElement = document.getElementById('description');
  descriptionElement.innerText = description;
}

// Ajout des possibilités de coloris, récupérés via l'API

function addColorsOptions(colorslist) {

  for (let color of colorslist) {
    let colorsOptions = document.createElement('option');
    colorsOptions.value = color;
    colorsOptions.innerText = color;
    colorId.appendChild(colorsOptions);
  }
}


// Récupération de l'API du produit ajouté, via son ID

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



  //Appel de la fonction pour ajouter le produit séléctionné au panier via le clic sur le bouton 


function addProductToCart() {
  let addToCart = document.getElementById('addToCart');

  addToCart.addEventListener('click', function () {

    let obj = {
      id: id,
      color: colorId.value,
      quantity: parseInt(quantity.value)
    }

    if (obj.color != '' && obj.quantity > 0){
      addCart(obj);
      addMsgBox('Votre produit a bien été ajouté au panier');
    }else{
      addMsgBox('Veuillez choisir une quantité supérieure à 0, ainsi qu\'une couleur');
    }
    

  })
}
