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


function addSettingsQuantity(Settings, quantityChoose, productChoosen, priceFromApi){

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
    
  

  printTotalOfArticles();
  // lesDeux(priceFromApi)

  calculPrix(priceFromApi, quantityChoose)
  saveBasket(objJson);

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

        printTotalOfArticles();
        
        saveBasket(objJson)
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




function add(priceFromApi, quantity, arrayPrice){
  let printPrice = document.getElementById('totalPrice')

  let prixTot = priceFromApi * quantity;

  console.log(prixTot)

  arrayPrice.push(prixTot)

  return arrayPrice
}

function calc (arrayPrice){

  const reducer = (accumulator, currentValue) => accumulator + currentValue

  const coutTotal = arrayPrice.reduce(reducer);

  console.log(coutTotal)

  printPrice.innerHTML = coutTotal

  return printPrice
  
}

function cumul(priceFromApi){
  let arrayPrice = [];

  for (let p of objJson){
    add(priceFromApi, p.quantity, arrayPrice)
  }
  calc(arrayPrice)
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

    let image = addImg(productFromApi.imageUrl ,createdArticle);

    let itemContent = addDivCartItemContent(createdArticle);
    
    let itemContentDescription = addDivCartItemContentDescription(itemContent);
    
    let name = addNameProduct(productFromApi.name, itemContentDescription);
    
    let color = addColorProduct(itemContentDescription, colorChoose);
    
    let price = addPriceProduct(productFromApi.price, itemContentDescription);

    let itemContentSettings = addCartItemContentSettings(itemContent);

    

    let settingsQuantity = addSettingsQuantity(itemContentSettings, quantityChoose, productChoosen, productFromApi.price);
    
    let ButtonDelete = settingsButtonDelete(itemContentSettings, createdArticle);
    
    
    
    
    
    

    // leprixtotal(productFromApi.price);


    



// calculPrix(productFromApi.price, productChoosen.quantity)





cumul(productFromApi.price)





    // let calcTotalPriceProducts = calcTotalPrice(productFromApi.price, quantityChoose);
    // let printTotalPrice = addTotalPrice(calcTotalPriceProducts);
    
    // let leprix = leprixtotal(calcTotalPrice(productFromApi.price, quantityChoose))
    // lesDeux(productFromApi.price)
    
  })
  
  
  .catch(function (err) {
    console.log(err)
    console.log("Une erreur est survenue")
  })
  
  
  
}
// lesDeux("1000")
let printQuantity = printTotalOfArticles();