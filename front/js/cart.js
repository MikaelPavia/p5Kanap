// Récupérer l'élément avec l'ID "items"

let section = document.getElementById('cart__items');

// Sauvegarder le panier dans le localStorage

function saveCart(Cart) {
  localStorage.setItem("Cart", JSON.stringify(Cart));
}


//Récupérer le contenu du localStorage

function getCart() {
  let Cart = localStorage.getItem("Cart");
  let objJson = JSON.parse(Cart);
  return objJson;
}

let objJson = getCart();


// Ajouter au panier le produit choisi, sa couleur et sa quantité

function addCart(product) {

  let Cart = getCart();

  Cart.push(product);

  saveCart(Cart);
}


// Définition de l'url de chaque produit

function url(productChoosen) {

  let urlProducts = 'http://localhost:3000/api/products/';
  urlProducts += productChoosen.id;
  return (urlProducts);
}

// Récupération de la couleur choisie par l'utilisateur

function getColorChoose(productChoosen) {

  let colorChoose = productChoosen.color;
  return (colorChoose);
}

// Récupération de la quantité siasie par l'utilisateur

function getQuantityChoose(productChoosen) {

  let quantityChoose = productChoosen;
  return (quantityChoose);
}

// Création d'un élément article, ajouté à l'élément "section" défini plus haut

function addArticle(idProductChoosen, colorProductChoosen) {

  let article = document.createElement('article');
  article.classList.add("cart__item");
  article.dataset.id = idProductChoosen;
  article.dataset.color = colorProductChoosen;
  section.appendChild(article);
  // console.log(article.dataset.id)
  // console.log(article.dataset.color)
  return article;
}

// Ajout de l'image du produit correspondant récupéré via l'API 

function addImg(imageProduct, article) {
  let divImg = document.createElement('div');
  divImg.classList.add('cart__item__img');
  article.appendChild(divImg);
  let img = document.createElement('img');
  img.src = imageProduct;
  divImg.appendChild(img);
  return divImg;
}

// Création d'un élément DIV rattaché à l'élément article, pour afficher les informations produit

function addDivCartItemContent(article) {

  let divCartItemContent = document.createElement('div');
  divCartItemContent.classList.add("cart__item__content");
  article.appendChild(divCartItemContent);
  return divCartItemContent;
}

// Création d'un élément DIV rattaché à la DIV précedente, pour l'affichage de la description du produit

function addDivCartItemContentDescription(divCartItemContent) {

  let divCartItemContentDescription = document.createElement('div');
  divCartItemContentDescription.classList.add('cart__item__content__description');
  divCartItemContent.appendChild(divCartItemContentDescription);
  return divCartItemContentDescription;

}

// Affichage du nom du produit, rattaché à la DIV précédente

function addNameProduct(nameChoose, contentDescription) {

  let nameProduct = document.createElement('h2');
  nameProduct.innerText = nameChoose;
  contentDescription.appendChild(nameProduct);
}

// Affichage de la couleur choisie par l'utilisateur

function addColorProduct(contentDescription, colorChoose) {

  let colorProduct = document.createElement('p');
  colorProduct.innerHTML = colorChoose;
  contentDescription.appendChild(colorProduct);

}

// Affichage du prix du produit, récupéré via l'API

function addPriceProduct(priceChoose, contentDescription) {

  let priceProduct = document.createElement('p');
  priceProduct.innerHTML = priceChoose + " €";
  contentDescription.appendChild(priceProduct);
}

// Création d'une DIV pour contenir l'input quantité et le bouton supprimer

function addCartItemContentSettings(divCartItemContent) {

  let divCartItemContentSettings = document.createElement('div');
  divCartItemContentSettings.classList.add('cart__item__content__settings');
  divCartItemContent.appendChild(divCartItemContentSettings);
  return divCartItemContentSettings;

}

// Création de l'input quantité, affichant la quantité choisie à létape précédente

function addSettingsQuantity(Settings, quantityChoose, productChoosen) {

  let divCartItemContentSettingsQuantity = document.createElement('div');
  divCartItemContentSettingsQuantity.classList.add('cart__item__content__settings__quantity');
  let qté = document.createElement('p');
  qté.innerText = 'Qté : ';
  let inputQté = document.createElement('input');

  inputQté.type = 'number';
  inputQté.classList.add('itemQuantity');
  inputQté.name = ('itemQuantity');
  inputQté.min = '1';
  inputQté.max = '100';
  inputQté.value = quantityChoose;

  divCartItemContentSettingsQuantity.appendChild(qté);
  divCartItemContentSettingsQuantity.appendChild(inputQté);
  Settings.appendChild(divCartItemContentSettingsQuantity);

// Ecoute de l'évènement 'change' de l'input quantité pour mettre à jour localStorage, la quantité et le prix total affichés
  inputQté.addEventListener('change', function () {

    productChoosen.quantity = inputQté.value;

    saveCart(objJson);

    printTotalOfArticles();

    updatePrice();


  })
}

// Création du bouton supprimer pour retirer un article du panier

function settingsButtonDelete(Settings, article) {

  let divCartItemContentSettingsDelete = document.createElement('div');

  divCartItemContentSettingsDelete.classList.add('cart__item__content__settings__delete');

  let deleteButton = document.createElement('p');
  deleteButton.classList.add('deleteItem');
  deleteButton.innerText = 'Supprimer';
  divCartItemContentSettingsDelete.appendChild(deleteButton);
  Settings.appendChild(divCartItemContentSettingsDelete);
  deleteButton.addEventListener('click', function () {

    let div = document.getElementsByTagName('article');

  // Pour chaque élément du localStorage, au clic du bouton "supprimer", 
  // le produit correspondant est supprimé du panier, du localStorage,
  // la quantité et le prix total sont mis à jour

    for (let i = 0; i < objJson.length; i++) {
      if (objJson[i].id == article.dataset.id && objJson[i].color == article.dataset.color) {

        article.remove();

        objJson.splice(i, 1)

        saveCart(objJson)

        printTotalOfArticles();

        updatePrice();


      }
      
    }
  })

  return divCartItemContentSettingsDelete;

}

//Ajouter la quantité totale choisie pour chaque élément du panier dans un tableau

function addTotalQuantityInArray(quantityChoose, arrayTotalQuantity) {

  let totalQuantity = document.getElementById('totalQuantity');
  let totalQuantityProduct = parseInt(quantityChoose)
  arrayTotalQuantity.push(totalQuantityProduct)
  return arrayTotalQuantity;
}


// Calculer la quantité totale d'articles dans le panier uniquement s'il y en plus de 0

function calcTotalNumberOfArticles(arrayTotalQuantity) {

  
  totalNumberOfArticles = 0

  if (arrayTotalQuantity.length > 0){
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const totalNumberOfArticles = arrayTotalQuantity.reduce(reducer);
    totalQuantity.innerHTML = totalNumberOfArticles;
    
  }else {
    totalQuantity.innerHTML = totalNumberOfArticles;
  }
  

  
  
  return totalQuantity;
}

// Afficher la quantité totale d'articles sur la page

function printTotalOfArticles() {
  let objJson = getCart();
  let arrayTotalQuantity = [];

  for (let p of objJson) {

    addTotalQuantityInArray(p.quantity, arrayTotalQuantity)

  }
  calcTotalNumberOfArticles(arrayTotalQuantity)
  return arrayTotalQuantity;
}

// Ajouter le prix total de chaque produit dans un tableau

function addTotalPriceInArray(priceFromApi, quantity, arrayPrice) {


  let totalPrice = priceFromApi * quantity;

  console.log(totalPrice)

  arrayPrice.push(totalPrice)

  return arrayPrice
}

//Calculer le montant total du  panier

function calcTotalPrice(arrayPrice) {

let arrayTotalQuantity = printTotalOfArticles();


let calcPrice =0
  if (arrayTotalQuantity.length > 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    calcPrice = arrayPrice.reduce(reducer);
  }

  return calcPrice;
}


// Afficher le montant total du panier sur la page

function printTotalPriceInCart(products) {
  let printPrice = document.getElementById('totalPrice')
  let arrayPrice = [];
  let cart = getCart();
  for (let cartItem of cart) {
    let price;
    for (let product of products) {
      if (cartItem.id == product._id) {
        price = product.price;

        break;
      }
    };
    addTotalPriceInArray(price, cartItem.quantity, arrayPrice)
  }

  printPrice.innerHTML = calcTotalPrice(arrayPrice);
}


// Mettre à jour le prix des produits

function updatePrice() {

  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })

    .then(function (products) {

      printTotalPriceInCart(products)

    })
    .catch(function (err) {
      console.log(err)
      console.log("Une erreur est survenue")
    })

}



// Pour chaque item du localStorage, appel API du produit et éxécution des différentes fonctions

for (let productChoosen of objJson) {

  let urlProducts = url(productChoosen);
  let colorChoose = getColorChoose(productChoosen, productChoosen.color);
  let quantityChoose = getQuantityChoose(productChoosen.quantity);

  fetch(urlProducts)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (productFromApi) {

      let createdArticle = addArticle(productChoosen.id, productChoosen.color);

      addImg(productFromApi.imageUrl, createdArticle);

      let itemContent = addDivCartItemContent(createdArticle);

      let itemContentDescription = addDivCartItemContentDescription(itemContent);

      addNameProduct(productFromApi.name, itemContentDescription);

      addColorProduct(itemContentDescription, colorChoose);

      addPriceProduct(productFromApi.price, itemContentDescription);

      let itemContentSettings = addCartItemContentSettings(itemContent);

      addSettingsQuantity(itemContentSettings, quantityChoose, productChoosen, productFromApi.price);

      settingsButtonDelete(itemContentSettings, createdArticle);




    })


    .catch(function (err) {
      console.log(err)
      console.log("Une erreur est survenue")
    })
}
let printQuantity = printTotalOfArticles();
updatePrice();






const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');

let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
let lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
let addressErrorMsg = document.getElementById('addressErrorMsg');
let cityErrorMsg = document.getElementById('cityErrorMsg');
let emailErrorMsg = document.getElementById('emailErrorMsg');



let errorMsgNamesAndCity = 'Le champ doit contenir entre 2 et 25 caractères, sans chiffes ni caractères spéciaux'
let errorMsgAddress = 'Le champ doit contenir entre 2 et 35 caractères, sans caractères spéciaux'
let errorMsgEmail = 'Veuillez saisir une adresse mail valide'



const namesAndCityRegex = (value) => {
  return /^[a-z A-Z é-]{2,25}$/.test(value);
}

const addressRegex = (value) => {
  return /^[a-z A-Z 0-9 é-]{2,35}$/.test(value);
}

const emailRegex = (value) => {
  return /^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,4})$/.test(value);
}



// Vérification des informations saisies dans les formulaires via des REGEX et attribution d'une classe 
function checkForm(formField, regex, errorMsg, errorMessageContent) {
  formField.addEventListener("input", function () {

    if (regex(formField.value)) {
      formField.classList.add('is-valid');
      formField.classList.replace("is-invalid", "is-valid");
      console.log("TRUE");
      errorMsg.innerHTML = '';
      return true;
    } else if (!formField.value.match(regex)) {
      formField.classList.add("is-invalid");
      formField.classList.replace("is-valid", "is-invalid");
      console.log("FALSE");
      errorMsg.innerHTML = errorMessageContent;
      return false
    }
  });
  formField.addEventListener("focus", function () {
    if (formField.value === "") {
      formField.classList.remove("is-valid", "is-invalid");
      console.log("EN COURS");
    }
  })
}

checkForm(firstName, namesAndCityRegex, firstNameErrorMsg, errorMsgNamesAndCity)

checkForm(lastName, namesAndCityRegex, lastNameErrorMsg, errorMsgNamesAndCity)

checkForm(city, namesAndCityRegex, cityErrorMsg, errorMsgNamesAndCity)

checkForm(address, addressRegex, addressErrorMsg, errorMsgAddress)

checkForm(email, emailRegex, emailErrorMsg, errorMsgEmail)

// setTimeout(() => {
//   console.log(firstName.value)
//   // console.log(typeof(contact.address))
//   console.log(firstName)
// }, "10000")

let contacts = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  email: ''
}


// Remplissage de l'objet si les données saisies sont valides

function getOrder() {
  let inputs = document.querySelectorAll('input');

  console.log(typeof (inputs))

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function () {
      console.log('changement')

      if (inputs[i].className === "is-valid") {
        console.log("champ " + inputs[i].id + " validé")

        contacts.firstName = firstName.value
        contacts.lastName = lastName.value
        contacts.address = address.value
        contacts.city = city.value
        contacts.email = email.value
        console.log(contacts)
        
      }
    })

  }

}

// Création d'un tableau comprenant l'ID de chaque porduit du panier

function createProductArray() {
  let createProductArray = getCart()

  let products = []
  for (let i of createProductArray) {
    let idProduct = i.id;
    products.push(idProduct)
  }

  console.log(products)

  return products;
}



getOrder();


// Envoi du panier et des informations de contact à l'API via une méthode POST

function sendOrder() {
  const contact = contacts

  let products = createProductArray();



  let orderObject = { contact, products }
  customerOrder = JSON.stringify(orderObject)
  console.log(orderObject)

  if (document.getElementsByClassName('is-valid').length == 5) {
    console.log('il y en a 5')

    fetch('http://localhost:3000/api/products/order', {

      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },

      body: customerOrder,

    }).then(function(response){
      // Récupérer la réponse en JSON
      return response.json();
  })

      .then(function (response) {
        console.log(response)
        localStorage.removeItem("Cart");
        window.location.href = "confirmation.html?orderId=" + response.orderId;
      })

      .catch(function (error) {
        console.log(error)
        alert("Erreur lors de l'envoi de la commande")

      });
  } else {

    alert("Veuillez correctement remplir le formulaire")

  }
}



let btn = document.getElementById('order')
btn.addEventListener('click', function(event){

  
  event.preventDefault();

  if (document.getElementsByTagName('article').length > 0) {
    sendOrder();
  }else {
    alert('Veuillez ajouter un produit au panier avant de continuer')
  }
  
})


// setTimeout(() => {
//   sendOrder()
// }, "10000")






// let contact = {
//   firstName: '',
//   lastName: '',
//   address: '',
//   city: '',
//   email: ''
// }


// function checkFirstName(inputName,errorMsg){

//   inputName.addEventListener('input', function(){


//     let reg = /^[a-z A-Z é-]{2,25}$/;
//     if(inputName.value == 0) {
//       valeur = null;

//     }else if(inputName.value.length < 2 || inputName.value.length > 25){
//       errorMsg.innerHTML = 'Le champ doit contenir entre 2 et 25 caractères'
//       valeur = null

//     }else if(!inputName.value.match(reg) && inputName.value.length > 2 && inputName.value.length < 25){
//       errorMsg.innerHTML = 'Le champ ne doit pas contenir de caractères spéciaux ni de chiffres'


//     }else if(inputName.value.match(reg)){
//       errorMsg.innerHTML = 'youpi'
//       contact.firstName = inputName.value;
//       console.log(reg.test(inputName.value))
//     }

//   })
// }


// function checkLastName(inputName,errorMsg){
//   inputName.addEventListener('input', function(){


//     let reg = /^[a-z A-Z é-]{2,25}$/;
//     if(inputName.value == 0) {
//       valeur = null;

//     }else if(inputName.value.length < 2 || inputName.value.length > 25){
//       errorMsg.innerHTML = 'Le champ doit contenir entre 2 et 25 caractères'
//       valeur = null

//     }else if(!inputName.value.match(reg) && inputName.value.length > 2 && inputName.value.length < 25){
//       errorMsg.innerHTML = 'Le champ ne doit pas contenir de caractères spéciaux ni de chiffres'


//     }else if(inputName.value.match(reg)){
//       errorMsg.innerHTML = 'youpi'
//       contact.lastName = inputName.value;
//     }
//   })
// }

// function checkCityName(inputName,errorMsg){
//   inputName.addEventListener('input', function(){


//     let reg = /^[a-z A-Z é-]{2,25}$/;
//     if(inputName.value == 0) {
//       valeur = null;

//     }else if(inputName.value.length < 2 || inputName.value.length > 25){
//       errorMsg.innerHTML = 'Le champ doit contenir entre 2 et 25 caractères'
//       valeur = null

//     }else if(!inputName.value.match(reg) && inputName.value.length > 2 && inputName.value.length < 25){
//       errorMsg.innerHTML = 'Le champ ne doit pas contenir de caractères spéciaux ni de chiffres'


//     }else if(inputName.value.match(reg)){
//       errorMsg.innerHTML = 'youpi'
//       contact.city = inputName.value;
//     }
//   })
// }


// function checkAddressInput(inputName,errorMsg){
//   inputName.addEventListener('input', function(){


//     let reg = /^[a-z A-Z 0-9 é-]{2,35}$/;
//     if(inputName.value == 0) {
//       contact.inputName = null;

//     }else if(inputName.value.length < 2 || inputName.value.length > 35){
//       errorMsg.innerHTML = 'Le champ doit contenir entre 2 et 25 caractères'
//       contact.inputName = null

//     }else if(!inputName.value.match(reg) && inputName.value.length > 2 && inputName.value.length < 35){
//       errorMsg.innerHTML = 'Le champ ne doit pas contenir de caractères spéciaux'
//       contact.inputName = inputName.value;


//     }else if(inputName.value.match(reg)){
//       errorMsg.innerHTML = 'youpi'
//       contact.address = inputName.value;

//     }
//   })
// }

// function checkEmailInput(inputName,errorMsg){
//   inputName.addEventListener('input', function(){


//     let reg = /^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,4})$/;

//     if(inputName.value == 0) {
//       contact.inputName = null;

//     }else if(!inputName.value.match(reg)){
//       errorMsg.innerHTML = 'Veuillez saisir une adresse mail valide'
//       contact.inputName = inputName.value;

//     }else if(inputName.value.match(reg)){
//       errorMsg.innerHTML = 'youpi'
//       contact.email = inputName.value;

//     }

//   })
// }

// checkFirstName(firstName, firstNameErrorMsg)
// checkLastName(lastName, lastNameErrorMsg)
// checkCityName(city, cityErrorMsg)

// checkAddressInput(address, addressErrorMsg)
// checkEmailInput(email,emailErrorMsg)

// setTimeout(()=>{
//   console.log(contact)
//   console.log(typeof(contact.address))

// },"10000")





// btn.addEventListener('click', function(){
//   console.log(contact)
// console.log('em')
// if(checkEmailInput(email,emailErrorMsg)==true){
//   console.log('true')
// }else{
//   console.log('false')
// }

// document.location.href= "confirmation.html"

// })

// let createProductArray = getCart()

// let products =[]
// for (let i of createProductArray){
//   let idProduct = i.id;
//   products.push(idProduct)
// }

// console.log(products)

// let btn = document.getElementById('order')
// const toSend = {
//   contact,
//   products
// }
// btn.addEventListener('click', function(){
//   console.log(contact)


// })
