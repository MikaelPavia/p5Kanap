// let objJson = {
//     produit : "Dany",
//     age : 30,
//     taille : 170
// }
// let objLinea = JSON.stringify(objJson)
// localStorage.setItem("obj",objLinea)

// console.log(objJson)

let objLinea = localStorage.getItem("obj");
console.log(objLinea);

    
let objJson = JSON.parse(objLinea);
console.log(objJson)

let section = document.getElementById('cart__items');
// let div = document.createElement('div');
// div.innerHTML = objJson.id;
// div.innerHTML += objJson.color
// div.innerHTML += objJson.name;
// div.innerHTML += objJson.price;
// section.appendChild(div)

let article = document.createElement('article');
article.classList.add("cart__item");
article.dataset.id = objJson.id;
article.dataset.color = objJson.color;


section.appendChild(article);


let divImg = document.createElement('div');
divImg.classList.add('cart__item__img');
article.appendChild(divImg);

let img = document.createElement('img');
img.src = "";
img.src = "";
divImg.appendChild(img);

let divCartItemContent = document.createElement('div');
divCartItemContent.classList.add("cart__item__content");
article.appendChild(divCartItemContent);

let divCartItemContentDescription = document.createElement('div');
divCartItemContentDescription.classList.add('cart__item__content__description');
divCartItemContent.appendChild(divCartItemContentDescription);
let nameProduct = document.createElement('h2');
let colorProduct = document.createElement('p');
let priceProduct = document.createElement('p');


nameProduct.innerText = objJson.name;
colorProduct.innerHTML = objJson.color;
priceProduct.innerHTML = objJson.price + " €";


divCartItemContentDescription.appendChild(nameProduct);
divCartItemContentDescription.appendChild(colorProduct);
divCartItemContentDescription.appendChild(priceProduct);



console.log(objJson.name)
console.log(article)
console.log(nameProduct)
console.log(divCartItemContent)







// if (article.hasAttributes()) {
//     var attrs = article.attributes;
//     var output = "";
//     for(var i = attrs.length - 1; i >= 0; i--) {
//       output += attrs[i].name + "->" + attrs[i].value;
//     }
    
//     console.log(output)
//   } else {
//     result.value = "No attributes to show";
//   }
