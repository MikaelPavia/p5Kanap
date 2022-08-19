let sectionItems = document.getElementById("items");

fetch("http://localhost:3000/api/products")
  .then(function(res){
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value){
    for (let i = 0; i < value.length; i++){
      console.log(value[i])

      
      let a = document.createElement("a");
      a.href = "./product.html?id=" + value[i]._id;
      sectionItems.appendChild(a);

      let article = document.createElement("article");
      a.appendChild(article);

      let img = document.createElement("img");
      img.src  = value[i].imageUrl;
      img.alt = value[i].altTXT;
      article.appendChild(img);

      let title = document.createElement("h3");
      title.classList.add("productName");
      title.innerText = value[i].name;
      article.appendChild(title);

      let p = document.createElement("p");
      p.classList.add("productDescription");
      p.innerHTML = value[i].description;
      article.appendChild(p);

      // function addLink (){
      //   let a = document.createElement("a");
      //   a.href = "./product.html?id=" + value[i]._id;
      //   sectionItems.appendChild(a);
      // }
      // addLink();


      // function addArticle (){
      //   let article = document.createElement("article");
      //   a.appendChild(article);
      // }
      // addArticle()
      

      // function addImg (){
      //   let img = document.createElement("img");
      // img.src  = value[i].imageUrl;
      // img.alt = value[i].altTXT;
      // article.appendChild(img);
      // }
      // addImg();
      

      // function addTitle (){
      //   let title = document.createElement("h3");
      // title.classList.add("productName");
      // title.innerText = value[i].name;
      // article.appendChild(title);
      // }
      // addTitle();


      
      // function addDescription (){
      //   let p = document.createElement("p");
      // p.classList.add("productDescription");
      // p.innerHTML = value[i].description;
      // article.appendChild(p);
      // }
      // addDescription();

    
    };
    console.log(value);
  })
  .catch(function(err){
    console.log(err)
    console.log("Une erreur est survenue")
  })