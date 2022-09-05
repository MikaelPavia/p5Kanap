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


function saveBasket(basket){
  localStorage.setItem("basket", JSON.stringify(basket));
}


function getBasket() {
  let basket = localStorage.getItem("basket");

  if (basket == null) {
    return [];
  }else {
    return JSON.parse(basket);
  }
}


function addBasket(product) {

  let basket = getBasket();


  // let foundProduct = basket.find(p => p.id == product.id && p.color == product.color);



  // let foundProduct = basket.find(function(p){
  //   return p.id == product.id && p.color == product.color
  // });



  function isCurrentProduct(produit){
    return produit.id == product.id && produit.color == product.color
  }

  let foundProduct = basket.find(isCurrentProduct);

  if (foundProduct != undefined) {
    // foundProduct = obj;
    // foundProduct.quantity++ + product.quantity;
    // product.quantity;
    // parseInt(quantity.value);
    
    foundProduct.quantity += parseInt(product.quantity);
  }else {
    basket.push(product);
  }

  saveBasket(basket);
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
addBasket(obj);

   }) 
}
// function saveBasket(array){
//   // localStorage.setItem("basket", JSON.stringify(basket));
//     localStorage.setItem("obj", JSON.stringify(array));
// }

// function getBasket(){
//   let basket = localStorage.getItem("obj");
//   if(basket == null){
//         return [];
        
//       }else {
        
//         return JSON.parse(basket);
        
//       }
// }

// function addBasket(product){
//   let basket = getBasket();
//   let obj = {
//     id: id,
//     color : colorId.value,
//     quantity : quantity.value
    
//   }

  

//   let productFound = basket.find(element => element.id == obj.id && element.color == obj.color)
  
//   console.log(productFound)
//   // for (let i = 0; i < basket.length; i ++){

//   // }
//   console.log(basket)
//     if (productFound != undefined){
//       obj.quantity++;
//     }else{
//       obj.quantity = 1;
//       basket.push(product);
//     }
//   array.push(obj);
//   console.log(array)
  

//   saveBasket(array)
// }
    
//       addBasket();


      











// let obj = {
//   id: id,
//   color: colorId.value,
//   quantity: quantity.value
// }

// function saveBasket(basket){
//   localStorage.setItem("obj", JSON.stringify(basket));
// }

// function getBasket(){
//   let basket = localStorage.getItem("obj");
//   if(basket == null){
//     return [];
    
//   }else {
//     return JSON.parse(basket);
//   }
// }

// console.log(getBasket())

// function addBasket(product){
//   let basket = getBasket();
// console.log(product)
//   // let foundProduct = basket.find(Element => Element == product.id && Element.color == product.color)
//   // if (foundProduct != undefined){
//   //   foundProduct.quantity++;
//   // }else {
//   //   product.quantity = 1
//   //   basket.push(product);
//   // }
  
//   saveBasket(basket)
// }

// addBasket(obj)

// console.log(addBasket())

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//     let objloc = localStorage.getItem("productChoose");

//     let objlocrecup = JSON.parse(objloc);


//     console.log(objlocrecup)


//     if (objlocrecup === null) {
//       console.log('yes')
//       obj = {
//         id: id,
//         color: colorId.value,
//         quantity: quantity.value
//       }

//       array.push(obj);
//       console.log(array);

//       let objLinea = JSON.stringify(array);
//       localStorage.setItem("productChoose", objLinea);

//       console.log(objlocrecup)
//     } else  {
// // for (let i=0; i < objlocrecup.length; i++){
//       //   console.log(objlocrecup)
//       //   obj = {
//       //     id: id,
//       //     color: colorId.value,
//       //     quantity: quantity.value
//       //   }

//       //   array.push(obj);
//       for (let i=0; i < objlocrecup; i++){
//         console.log('boucle')
//       }
      
//       obj = {
//         id: id,
//         color: colorId.value,
//         quantity: quantity.value
//       }
//       array.push(obj);
//       console.log(array);

//       let objLinea = JSON.stringify(array);
//       localStorage.setItem("productChoose", objLinea);
//       console.log('nooo')
//       console.log(objlocrecup.length)
//     }

