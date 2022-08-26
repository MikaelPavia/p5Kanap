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















// let array = [];
// let obj = {
//   id: id,
//   color : colorId.value,
//   quantity : quantity.value
// }
// function addProductToCart(product){
//   let addToCart = document.getElementById('addToCart');

//   addToCart.addEventListener('click', function(){

//     let objLinea = JSON.stringify(array);
//     localStorage.setItem("obj", objLinea);

//     let objLineaa = localStorage.getItem("obj");

// let objJson = JSON.parse(objLineaa);
//     addMsgBox();
//     console.log(obj)
//     if (objJson === null){
//       let array = [];
//       alert('yessss')
//     }else {
//       alert('nooooo')
//     }

// }
// )
// }





let array = [];
let obj = {
  id: id,
  color: colorId.value,
  quantity: quantity.value
}

let objLinea = JSON.stringify(array);
localStorage.setItem("productChoose", objLinea);


function addProductToCart(product) {
  let addToCart = document.getElementById('addToCart');

  addToCart.addEventListener('click', function () {

    // if (array.length === 0 ){
    //   obj = {
    //     id: id,
    //     color : colorId.value,
    //     quantity : quantity.value
    //   }
    //   array.push(obj);
    //   console.log(array);

    // }else {
    //   obj = {
    //     id: id,
    //     color : colorId.value,
    //     quantity : quantity.value
    //   }

    //   array.push(obj);
    //   console.log(array);


    // }

    // obj = {
    //       id: id,
    //       color : colorId.value,
    //       quantity : quantity.value
    //     }

    //     array.push(obj);
    //     console.log(array);

    // let objLinea = JSON.stringify(array);
    // localStorage.setItem("obj", objLinea);
    addMsgBox();

    let objloc = localStorage.getItem("productChoose");

    let objlocrecup = JSON.parse(objloc);


    console.log(objlocrecup)


    if (objlocrecup === null) {
      console.log('yes')
      obj = {
        id: id,
        color: colorId.value,
        quantity: quantity.value
      }

      array.push(obj);
      console.log(array);

      let objLinea = JSON.stringify(array);
      localStorage.setItem("productChoose", objLinea);

      console.log(objlocrecup)
    } else  {
// for (let i=0; i < objlocrecup.length; i++){
      //   console.log(objlocrecup)
      //   obj = {
      //     id: id,
      //     color: colorId.value,
      //     quantity: quantity.value
      //   }

      //   array.push(obj);
      for (let i=0; i < objlocrecup; i++){
        console.log('boucle')
      }
      
      obj = {
        id: id,
        color: colorId.value,
        quantity: quantity.value
      }
      array.push(obj);
      console.log(array);

      let objLinea = JSON.stringify(array);
      localStorage.setItem("productChoose", objLinea);
      console.log('nooo')
      console.log(objlocrecup.length)
    }
    console.log(objlocrecup)
  }
  )
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
