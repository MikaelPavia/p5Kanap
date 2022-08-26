let objLinea = localStorage.getItem("productChoose");

let objJson = JSON.parse(objLinea);
console.log(objJson.length)


for (let i = 0; i < objJson.length; i++){

  function url(){

    let urlProducts = 'http://localhost:3000/api/products/';
    urlProducts += objJson[i].id;
    return(urlProducts);
  }

  
  function getColorChoose() {

    let colorChoose = objJson[i].color;
    return(colorChoose);
  }

  function getQuantityChoose(){

    let quantityChoose = objJson[i].quantity;
    return(quantityChoose);
  }





  let colorChoose = getColorChoose();

let quantityChoose = getQuantityChoose();

let section = document.getElementById('cart__items');




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


function addColorProduct(contentDescription){
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


function addSettingsQuantity(Settings){

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

let urlProducts = url();


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
    let color = addColorProduct(itemContentDescription);
    let price = addPriceProduct(productFromApi.price, itemContentDescription);

    let itemContentSettings = addCartItemContentSettings(itemContent);
    let settingsQuantity = addSettingsQuantity(itemContentSettings);
    let ButtonDelete = settingsButtonDelete(itemContentSettings);

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