// let paramsString  = "http://localhost:3000/api/products";
// let searchParams= new URLSearchParams(paramsString);

// const { Value } = require("sass");

// for (let p of searchParams){
//     console.log(p);
// }

// const url = 'http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926';
// const params = new URLSearchParams({
//     name: 'Mika',
//     price : '1897'
// });

// console.log(params.toString());

// console.log(url)
// for (let p of params){
//     console.log(p);
// }

// const url = new URL('http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926');
// const params = new URLSearchParams(url.search);
// const params2 = new URLSearchParams("")
// console.log(url.href)
// console.log(url.origin)





// let url = 'http://localhost:3000/api/products/';
// url += id;
// console.log(id)
// console.log(url)



// urlData = new URL('http://localhost:3000/api/products/?id=' + id);
// console.log(urlData.search)
// console.log(urlData)
//         fetch(urlData)
//         .then(function(res){
//           if (res.ok) {
//             return res.json();
//           }
//         })
//         .then(function(value){
//           for (p of value){
//             console.log(p._id)
//             console.log(p.name)
//             let title = document.getElementById('title');
//             title += title.innerText = p.name;
//             let price = document.getElementById('price');
//             price.innerHTML = p.price;
//             let description = document.getElementById('description');
//             description.innerText = p.description;
            
//             // console.log(value)
            
//           };
//         })
//         .catch(function(err){
//           console.log("Une erreur est survenue")
//         })
         




// for (let i = 0; i < id.length; i++){
//     console.log(i)
// }

// console.log(document.location)

// let params = new URL(document.location).searchParams;



let url = 'http://localhost:3000/api/products';
let params = new URL(document.location).searchParams;
let id = params.get('id');


let url2 = 'http://localhost:3000/api/products/';
url2 += id;
console.log(id)
console.log(url2)
console.log(window.location.href)


fetch(url2)
  .then(function(res){
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value){
    console.log(value);
    console.log(value.name);
    
    let item__img = document.getElementById('item__img');
    // let item__img = document.getElementsByClassName('item__img');
    let img = document.createElement('img');
    img.src = value.imageUrl;
    img.alt = value.altTXT;
    item__img.append(img);

    let title = document.getElementById('title');
    title += title.innerText = value.name;
    let price = document.getElementById('price');
    price.innerHTML = value.price;
    let description = document.getElementById('description');
    description.innerText = value.description;
    let colors = document.getElementById('colors');
    let color = value.colors;
    for (let i=0; i < color.length; i++){
      console.log(i)
      let option = document.createElement('option');
      option.value = color[i];
      option.innerText = color[i];
      colors.appendChild(option);
    }
  })
  .catch(function(err){
    console.log("Une erreur est survenue")
  })