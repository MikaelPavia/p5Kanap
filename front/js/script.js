let sectionItems = document.getElementById("items");


function addLink (productId){
  let a = document.createElement("a");
  a.href = "./product.html?id=" + productId;
  sectionItems.appendChild(a);
  return a;
}

function addArticle (a){
  let article = document.createElement("article");
  a.appendChild(article);
  return article; 
}


function addImg (productImage, article){
  let img = document.createElement("img");
  img.src  = productImage;
  img.alt = productImage;
  article.appendChild(img);
  return img;
}

function addName (productName, article){
      let title = document.createElement("h3");
      title.classList.add("productName");
      title.innerText = productName;
      article.appendChild(title);
      return title;
}

function addDescription (productDescription, article) {
      let p = document.createElement("p");
      p.classList.add("productDescription");
      p.innerHTML = productDescription;
      article.appendChild(p);
}

fetch("http://localhost:3000/api/products")
  .then(function(res){
    if (res.ok) {
      return res.json();
    }
  })
  
  .then(function(products){
    for (let product of products){
      console.log(product)

      let createdLink = addLink(product._id);

      let createdArticle = addArticle(createdLink);

      let img = addImg(product.imageUrl, createdArticle)

      let name = addName(product.name, createdArticle)
      
      let description = addDescription(product.description, createdArticle)
    
    };
    
  })
  .catch(function(err){
    console.log(err)
    console.log("Une erreur est survenue")
  })



  // let a = document.createElement("a");
      // a.href = "./product.html?id=" + value[i]._id;
      // sectionItems.appendChild(a);

      // let article = document.createElement("article");
      // a.appendChild(article);

      // let img = document.createElement("img");
      // img.src  = value[i].imageUrl;
      // img.alt = value[i].altTXT;
      // article.appendChild(img);

      // let title = document.createElement("h3");
      // title.classList.add("productName");
      // title.innerText = value[i].name;
      // article.appendChild(title);

      // let p = document.createElement("p");
      // p.classList.add("productDescription");
      // p.innerHTML = value[i].description;
      // article.appendChild(p);