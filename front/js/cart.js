let objLinea = localStorage.getItem("obj");

let objJson = JSON.parse(objLinea);

let section = document.getElementById('cart__items');

let article = document.createElement('article');

let divImg = document.createElement('div');

let divCartItemContent = document.createElement('div');

let divCartItemContentDescription = document.createElement('div');

let divCartItemContentSettings = document.createElement('div');

function addArticle(){
    
    article.classList.add("cart__item");
    article.dataset.id = objJson.id;
    article.dataset.color = objJson.color;
    section.appendChild(article);
}




function addImg(){
    
    divImg.classList.add('cart__item__img');
    article.appendChild(divImg);
    let img = document.createElement('img');
    img.src = objJson.image;
    divImg.appendChild(img);
}



function addDivCartItemContent(){
    
    divCartItemContent.classList.add("cart__item__content");
    article.appendChild(divCartItemContent);
}


function addDivCartItemContentDescription(){
    
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
}

let divCartItemContentSettingsQuantity = document.createElement('div');
function addCartItemContentSettings(){

    divCartItemContentSettings.classList.add('cart__item__content__settings');
    article.appendChild(divCartItemContentSettings);

    divCartItemContentSettingsQuantity.classList.add('cart__item__content__settings__quantity');
    let qté = document.createElement('p');
    qté.innerText = 'Qté : ';
    let inputQté = document.createElement('input');
    inputQté.type = 'number';
    inputQté.classList.add('itemQuantity');
    inputQté.name = ('itemQuantity');
    inputQté.min = '1';
    inputQté.max = '100';
    inputQté.value = objJson.quantity;

    let divCartItemContentSettingsDelete = document.createElement('div');

    divCartItemContentSettingsDelete.classList.add('cart__item__content__settings__delete');

    let deleteButton = document.createElement('p');
    deleteButton.classList.add('deleteItem');
    deleteButton.innerText = 'Supprimer';
    divCartItemContentSettingsDelete.appendChild(deleteButton);



    divCartItemContentSettingsQuantity.appendChild(qté);

    divCartItemContentSettings.appendChild(divCartItemContentSettingsQuantity);

    divCartItemContentSettingsQuantity.appendChild(inputQté);

    divCartItemContentSettings.appendChild(divCartItemContentSettingsDelete);

} 
addArticle();

addImg();

addDivCartItemContent();

addDivCartItemContentDescription();

addCartItemContentSettings();



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
