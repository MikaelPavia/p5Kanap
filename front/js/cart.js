// let objLinea = localStorage.getItem("basket");

// let objJson = JSON.parse(objLinea);
// console.log(objJson.length)

let section = document.getElementById('cart__items');

function saveBasket(basket){
  localStorage.setItem("basket", JSON.stringify(basket));
}


function getBasket() {
  let basket = localStorage.getItem("basket");
  let objJson = JSON.parse(basket);
  return objJson;
}

let objJson = getBasket();


function addBasket(product) {

  let basket = getBasket();
  
  basket.push(product);

  saveBasket(basket);
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

  let quantityChoose = productChoosen.quantity;
  return(quantityChoose);
}



function addArticle(){
  
  let article = document.createElement('article');
  article.classList.add("cart__item");
  article.dataset.id = objJson.id;
  article.dataset.color = objJson.color;
  section.appendChild(article);
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
    saveBasket(objJson);
  })
}


function settingsButtonDelete (Settings){

  let divCartItemContentSettingsDelete = document.createElement('div');

  divCartItemContentSettingsDelete.classList.add('cart__item__content__settings__delete');

  let deleteButton = document.createElement('p');
  deleteButton.classList.add('deleteItem');
  deleteButton.innerText = 'Supprimer';
  divCartItemContentSettingsDelete.appendChild(deleteButton);
  Settings.appendChild(divCartItemContentSettingsDelete);
  return divCartItemContentSettingsDelete;

}






for (let productChoosen of objJson){

  let urlProducts = url(productChoosen);
  let colorChoose = getColorChoose(productChoosen, productChoosen.color);
  let quantityChoose = getQuantityChoose(productChoosen, productChoosen.quantity);
  


fetch(urlProducts)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (productFromApi) {

    


    let createdArticle = addArticle();

    let image = addImg(productFromApi.imageUrl ,createdArticle);

    let itemContent = addDivCartItemContent(createdArticle);
    
    let itemContentDescription = addDivCartItemContentDescription(itemContent);
    
    let name = addNameProduct(productFromApi.name, itemContentDescription);
    
    let color = addColorProduct(itemContentDescription, colorChoose);
    
    let price = addPriceProduct(productFromApi.price, itemContentDescription);

    let itemContentSettings = addCartItemContentSettings(itemContent);
    
    let settingsQuantity = addSettingsQuantity(itemContentSettings, quantityChoose, productChoosen);
    
    let ButtonDelete = settingsButtonDelete(itemContentSettings);
    
console.log(productChoosen.quantity)
    if(productChoosen.quantity == '0'){
      // objJson.splice(productChoosen)
      console.log(productChoosen);
      console.log(objJson)
      console.log('La quantité est à 0' + productFromApi.name)
    }
  })

  .catch(function (err) {
    console.log(err)
    console.log("Une erreur est survenue")
  })

}









  





// function addDivCartItemContentDescription(){
    
//     divCartItemContentDescription.classList.add('cart__item__content__description');
//     divCartItemContent.appendChild(divCartItemContentDescription);

//     let nameProduct = document.createElement('h2');
//     let colorProduct = document.createElement('p');
//     let priceProduct = document.createElement('p');
    
    
//     // nameProduct.innerText = objJson.name;
//     colorProduct.innerHTML = objJson.color;
//     // priceProduct.innerHTML = objJson.price + " €";  // Appel API
    
    
//     divCartItemContentDescription.appendChild(nameProduct);
//     divCartItemContentDescription.appendChild(colorProduct);
//     divCartItemContentDescription.appendChild(priceProduct);
// }




// function addCartItemContentSettings(){

//     divCartItemContentSettings.classList.add('cart__item__content__settings');
//     divCartItemContent.appendChild(divCartItemContentSettings);

//     divCartItemContentSettingsQuantity.classList.add('cart__item__content__settings__quantity');
//     let qté = document.createElement('p');
//     qté.innerText = 'Qté : ';
//     let inputQté = document.createElement('input');
//     inputQté.type = 'number';
//     inputQté.classList.add('itemQuantity');
//     inputQté.name = ('itemQuantity');
//     inputQté.min = '1';
//     inputQté.max = '100';
//     inputQté.value = objJson.quantity;

//     let divCartItemContentSettingsDelete = document.createElement('div');

//     divCartItemContentSettingsDelete.classList.add('cart__item__content__settings__delete');

//     let deleteButton = document.createElement('p');
//     deleteButton.classList.add('deleteItem');
//     deleteButton.innerText = 'Supprimer';
//     divCartItemContentSettingsDelete.appendChild(deleteButton);



//     divCartItemContentSettingsQuantity.appendChild(qté);

//     divCartItemContentSettings.appendChild(divCartItemContentSettingsQuantity);

//     divCartItemContentSettingsQuantity.appendChild(inputQté);

//     divCartItemContentSettings.appendChild(divCartItemContentSettingsDelete);

// } 