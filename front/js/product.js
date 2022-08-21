let params = new URL(document.location).searchParams;
let id = params.get('id');


let urlProducts = 'http://localhost:3000/api/products/';
urlProducts += id;




function addMsgBox(){
  let msg = document.getElementsByTagName('article');
  console.log(msg)
  for (let message of msg){
    let box = document.createElement('div');
    box.style.border = "1px solid black";
    box.style.borderRadius = "10px";
    box.style.width = "400px";
    box.style.marginTop = "50px";
    box .style.textAlign = 'center';
    box.style.backgroundColor = "green";
    box.innerText = 'Votre produit a bien été ajouté au panier';
    message.appendChild(box)

    setTimeout(() => {
      box.remove();
    }, "1500")
    
  }
}






fetch(urlProducts)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {




    function addProductToCart(){
      let addToCart = document.getElementById('addToCart');

      addToCart.addEventListener('click', function(){
        let product = {
          id: id,
          name: value.name,
          price: value.price,
          color : colors.value,
          image : value.imageUrl,
          quantity : quantity.value
          
        }
        
        let objLinea = JSON.stringify(product)
        localStorage.setItem("obj", objLinea)
        addMsgBox()
    }
    )
    }
  addProductToCart();
    




  function addImage(){
    let items__img = document.getElementsByClassName('item__img');
    for (image of items__img) {
      let img = document.createElement('img');
      img.src = value.imageUrl;
      img.alt = value.altTXT;
      image.appendChild(img);
    }
  }

  addImage();
    



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






