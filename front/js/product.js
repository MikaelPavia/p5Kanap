let params = new URL(document.location).searchParams;
let id = params.get('id');


let urlProducts = 'http://localhost:3000/api/products/';
urlProducts += id;



fetch(urlProducts)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {

    // let items__img = document.getElementById('items__img');
    let items__img = document.getElementsByClassName('items__img');
    console.log(items__img)
    for (p of items__img) {
      let img = document.createElement('img');
      img.src = value.imageUrl;
      img.alt = value.altTXT;
      items__img.append(img);
    }



    function addName() {
      let title = document.getElementById('title');
      title += title.innerText = value.name;
    }
    addName();



    function addPrice(){
      let price = document.getElementById('price');
    price.innerHTML = value.price;
    }
    addPrice();


    function addDescription (){
      let description = document.getElementById('description');
      description.innerText = value.description;
    }
    addDescription();


    function addColorsOptions(){
      let colorId = document.getElementById('colors');
      let colors = value.colors;

    for (color of colors) {
      let colorsOptions = document.createElement('option');
      colorsOptions.value = color;
      colorsOptions.innerText = color;
      colorId.appendChild(colorsOptions);
    }
    }
    addColorsOptions();


  })

  .catch(function (err) {
    console.log(err)
    console.log("Une erreur est survenue")
  })

let product = {
  id: id,
  name: title,
  price: 30,
  colors: "cn",
}
let objLinea = JSON.stringify(product)
localStorage.setItem("obj", objLinea)

