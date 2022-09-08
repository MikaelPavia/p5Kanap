// let objLinea = localStorage.getItem("Cart");

// let objJson = JSON.parse(objLinea);
// console.log(objJson.length)

let section = document.getElementById('cart__items');

function saveCart(Cart){
  localStorage.setItem("Cart", JSON.stringify(Cart));
}


function getCart() {
  let Cart = localStorage.getItem("Cart");
  let objJson = JSON.parse(Cart);
  return objJson;
}

let objJson = getCart();


function addCart(product) {

  let Cart = getCart();
  
  Cart.push(product);

  saveCart(Cart);
}


function url(productChoosen){

  let urlProducts = 'http://localhost:3000/api/products/';
  urlProducts += productChoosen.id;
  return(urlProducts);
}


function getColorChoose(productChoosen) {

  let colorChoose = productChoosen.color;
  return(colorChoose);
}


function getQuantityChoose(productChoosen){

  let quantityChoose = productChoosen;
  return(quantityChoose);
}


function addArticle(idProductChoosen, colorProductChoosen){
  
  let article = document.createElement('article');
  article.classList.add("cart__item");
  article.dataset.id = idProductChoosen;
  article.dataset.color = colorProductChoosen;
  section.appendChild(article);
  // console.log(article.dataset.id)
  // console.log(article.dataset.color)
  return article;
}


function addImg(imageProduct, article){
  let divImg = document.createElement('div');
  divImg.classList.add('cart__item__img');
  article.appendChild(divImg);
  let img = document.createElement('img');
  img.src = imageProduct;
  divImg.appendChild(img);
  return divImg;
}


function addDivCartItemContent(article){

  let divCartItemContent = document.createElement('div');
  divCartItemContent.classList.add("cart__item__content");
  article.appendChild(divCartItemContent);
  return divCartItemContent;
}


function addDivCartItemContentDescription(divCartItemContent){

  let divCartItemContentDescription = document.createElement('div');
  divCartItemContentDescription.classList.add('cart__item__content__description');
  divCartItemContent.appendChild(divCartItemContentDescription);
  return divCartItemContentDescription;

}


function addNameProduct(nameChoose, contentDescription){

  let nameProduct = document.createElement('h2');
  nameProduct.innerText = nameChoose;
  contentDescription.appendChild(nameProduct);
}


function addColorProduct(contentDescription, colorChoose){

  let colorProduct = document.createElement('p');
  colorProduct.innerHTML = colorChoose;
  contentDescription.appendChild(colorProduct);
  
}


function addPriceProduct(priceChoose, contentDescription){

  let priceProduct = document.createElement('p');
  priceProduct.innerHTML = priceChoose + " €";  // Appel API
  contentDescription.appendChild(priceProduct);
}


function addCartItemContentSettings(divCartItemContent){

  let divCartItemContentSettings = document.createElement('div');
  divCartItemContentSettings.classList.add('cart__item__content__settings');
  divCartItemContent.appendChild(divCartItemContentSettings);
  return divCartItemContentSettings;

} 


function addSettingsQuantity(Settings, quantityChoose, productChoosen){

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
  
  inputQté.addEventListener('change', function(){

  productChoosen.quantity = inputQté.value;

  saveCart(objJson);

  printTotalOfArticles();

  updatePrice();
  

  })
}


function settingsButtonDelete (Settings, article){

  let divCartItemContentSettingsDelete = document.createElement('div');

  divCartItemContentSettingsDelete.classList.add('cart__item__content__settings__delete');

  let deleteButton = document.createElement('p');
  deleteButton.classList.add('deleteItem');
  deleteButton.innerText = 'Supprimer';
  divCartItemContentSettingsDelete.appendChild(deleteButton);
  Settings.appendChild(divCartItemContentSettingsDelete);
  deleteButton.addEventListener('click', function(){
    
    let div = document.getElementsByTagName('article');

    for (let i = 0; i < objJson.length; i++){
      if (objJson[i].id == article.dataset.id && objJson[i].color == article.dataset.color){
        
        article.remove();
        
        objJson.splice(i,1)

        saveCart(objJson)

        printTotalOfArticles();
        
        updatePrice();
        
      }

    }
  })
  
  return divCartItemContentSettingsDelete;

}


function addTotalQuantityInArray(quantityChoose, arrayTotalQuantity){
  
  let totalQuantity = document.getElementById('totalQuantity');
  let totalQuantityProduct = parseInt(quantityChoose)
  arrayTotalQuantity.push(totalQuantityProduct)
  return arrayTotalQuantity;
}

function calcTotalNumberOfArticles(arrayTotalQuantity){
  const reducer = (accumulator, currentValue) => accumulator +currentValue
  const totalNumberOfArticles = arrayTotalQuantity.reduce(reducer);
   
  totalQuantity.innerHTML = totalNumberOfArticles;
  
  return totalQuantity;
}

function printTotalOfArticles(){
  let objJson = getCart();
  let arrayTotalQuantity = [];
  
  for (let p of objJson){
    
    addTotalQuantityInArray(p.quantity,arrayTotalQuantity)
    
  }
  calcTotalNumberOfArticles(arrayTotalQuantity)
}


// let arrayCalcTotalPrice = [];
// function addTotalPrice(prixTotal){

//     let printTotalPrice = document.getElementById('totalPrice');
  
//     let totalPrice = prixTotal;
    
//     printTotalPrice.innerHTML = totalPrice;
//     return printTotalPrice;
//   }
  

// function calcTotalPrice(prix, quantity){
  
//   let totalSameProduct = prix * quantity;
//   console.log(totalSameProduct)
  
//   arrayCalcTotalPrice.push(totalSameProduct)
//   console.log(arrayCalcTotalPrice)

//   const reducer = (accumulator, currentValue) => accumulator +currentValue
//   const prixTotal = arrayCalcTotalPrice.reduce(reducer);
//   console.log(prixTotal)
//   return prixTotal;
// }











// function addTotalPriceInArray(prix, quantity, arrayCalcTotalPrice){

//     let printTotalPrice = document.getElementById('totalPrice');
  
//     let totalPrice = prix * quantity;
    
//     arrayCalcTotalPrice.push(totalPrice)
//     printTotalPrice.innerHTML = totalPrice;
//     return arrayCalcTotalPrice;
//   }
  

// function calcTotalPrice(arrayCalcTotalPrice){

//   const reducer = (accumulator, currentValue) => accumulator +currentValue
//   const prixTotal = arrayCalcTotalPrice.reduce(reducer);
  
//   return prixTotal;
// }




// function leprixtotal(prix){

//   let arrayCalcTotalPrice = [];
// for (let p of objJson){
//   addTotalPriceInArray(prix, p.quantity, arrayCalcTotalPrice)
// }
//   calcTotalPrice(arrayCalcTotalPrice)
  
// }








// function calculPrix (priceFromApi, quantity){

//   let print = document.getElementById('totalPrice')

//   let prixTot = priceFromApi * quantity;

//   console.log(prixTot)

//   arrayPrice.push(prixTot)



//   console.log(arrayPrice)

//   const reducer = (accumulator, currentValue) => accumulator + currentValue

//   const coutTotal = arrayPrice.reduce(reducer);

//   console.log(coutTotal)

//   print.innerHTML = coutTotal


// }




function addTotalPriceInArray(priceFromApi, quantity, arrayPrice){
  

  let totalPrice = priceFromApi * quantity;

  console.log(totalPrice)

  arrayPrice.push(totalPrice)

  return arrayPrice
}

function calcTotalPrice (arrayPrice){

  

  const reducer = (accumulator, currentValue) => accumulator + currentValue

  const calcPrice = arrayPrice.reduce(reducer);

  console.log(calcPrice);

  return calcPrice;
  
}

function printTotalPriceInCart(products){
  let printPrice = document.getElementById('totalPrice')
  let arrayPrice = [];
  let cart = getCart();
  for (let cartItem of cart){
    let price;
    for (let product of products){
      if(cartItem.id == product._id){
        price = product.price;

        break;
      }
    };
    addTotalPriceInArray(price, cartItem.quantity, arrayPrice)
  }

  printPrice.innerHTML = calcTotalPrice(arrayPrice);
}




function updatePrice(){

  fetch("http://localhost:3000/api/products")
  .then(function(res){
    if (res.ok) {
      return res.json();
    }
  })
  
  .then(function(products){

    printTotalPriceInCart(products)
    
  })
  .catch(function(err){
    console.log(err)
    console.log("Une erreur est survenue")
  })

  
}







for (let productChoosen of objJson){

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

    addImg(productFromApi.imageUrl ,createdArticle);

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


let contact = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  email: ''
}


function checkFirstName(inputName,errorMsg){
  
  inputName.addEventListener('input', function(){

  
    let reg = /^[a-z A-Z é-]{2,25}$/;
    if(inputName.value == 0) {
      valeur = null;
  
    }else if(inputName.value.length < 2 || inputName.value.length > 25){
      errorMsg.innerHTML = 'Le champ doit contenir entre 2 et 25 caractères'
      valeur = null
  
    }else if(!inputName.value.match(reg) && inputName.value.length > 2 && inputName.value.length < 25){
      errorMsg.innerHTML = 'Le champ ne doit pas contenir de caractères spéciaux ni de chiffres'
      
  
    }else if(inputName.value.match(reg)){
      errorMsg.innerHTML = 'youpi'
      contact.firstName = inputName.value;
      console.log(reg.test(inputName.value))
    }
    
  })
}


function checkLastName(inputName,errorMsg){
  inputName.addEventListener('input', function(){

  
    let reg = /^[a-z A-Z é-]{2,25}$/;
    if(inputName.value == 0) {
      valeur = null;
  
    }else if(inputName.value.length < 2 || inputName.value.length > 25){
      errorMsg.innerHTML = 'Le champ doit contenir entre 2 et 25 caractères'
      valeur = null
  
    }else if(!inputName.value.match(reg) && inputName.value.length > 2 && inputName.value.length < 25){
      errorMsg.innerHTML = 'Le champ ne doit pas contenir de caractères spéciaux ni de chiffres'
      
  
    }else if(inputName.value.match(reg)){
      errorMsg.innerHTML = 'youpi'
      contact.lastName = inputName.value;
    }
  })
}

function checkCityName(inputName,errorMsg){
  inputName.addEventListener('input', function(){

  
    let reg = /^[a-z A-Z é-]{2,25}$/;
    if(inputName.value == 0) {
      valeur = null;
  
    }else if(inputName.value.length < 2 || inputName.value.length > 25){
      errorMsg.innerHTML = 'Le champ doit contenir entre 2 et 25 caractères'
      valeur = null
  
    }else if(!inputName.value.match(reg) && inputName.value.length > 2 && inputName.value.length < 25){
      errorMsg.innerHTML = 'Le champ ne doit pas contenir de caractères spéciaux ni de chiffres'
     
  
    }else if(inputName.value.match(reg)){
      errorMsg.innerHTML = 'youpi'
      contact.city = inputName.value;
    }
  })
}

















function checkAddressInput(inputName,errorMsg){
  inputName.addEventListener('input', function(){

  
    let reg = /^[a-z A-Z 0-9 é-]{2,35}$/;
    if(inputName.value == 0) {
      contact.inputName = null;
  
    }else if(inputName.value.length < 2 || inputName.value.length > 35){
      errorMsg.innerHTML = 'Le champ doit contenir entre 2 et 25 caractères'
      contact.inputName = null
  
    }else if(!inputName.value.match(reg) && inputName.value.length > 2 && inputName.value.length < 35){
      errorMsg.innerHTML = 'Le champ ne doit pas contenir de caractères spéciaux'
      contact.inputName = inputName.value;
      
  
    }else if(inputName.value.match(reg)){
      errorMsg.innerHTML = 'youpi'
      contact.address = inputName.value;
  
    }
  })
}

function checkEmailInput(inputName,errorMsg){
  inputName.addEventListener('input', function(){

  
    let reg = /^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,4})$/;
    let tr;
    if(inputName.value == 0) {
      contact.inputName = null;
  
    }else if(!inputName.value.match(reg)){
      errorMsg.innerHTML = 'Veuillez saisir une adresse mail valide'
      contact.inputName = inputName.value;
  
    }else if(inputName.value.match(reg)){
      errorMsg.innerHTML = 'youpi'
      contact.email = inputName.value;
      tr = true
    }
return  tr
  })
}






checkFirstName(firstName, firstNameErrorMsg)
checkLastName(lastName, lastNameErrorMsg)
checkCityName(city, cityErrorMsg)

checkAddressInput(address, addressErrorMsg)
checkEmailInput(email,emailErrorMsg)




setTimeout(()=>{
  console.log(contact)
  console.log(typeof(contact.address))
  
},"10000")





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

let createProductArray = getCart()

let products =[]
for (let i of createProductArray){
  let idProduct = i.id;
  products.push(idProduct)
}

console.log(products)

let btn = document.getElementById('order')
const toSend = {
  contact,
  products
}
btn.addEventListener('click', function(){
  console.log(contact)

  
})


// let contactStringify = JSON.stringify(contact);
// let productsStringify = JSON.stringify(arrayProduct)

let promise = fetch("http://localhost:3000/api/order", {

  method: "POST",
  headers:{
    'Content-type': 'application/JSON'
  },
  body: JSON.stringify(contact, products),
  
});

