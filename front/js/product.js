// let paramsString  = "http://localhost:3000/api/products";
// let searchParams= new URLSearchParams(paramsString);

// for (let p of searchParams){
//     console.log(p);
// }

const url = new URL('http://localhost:3000/api/products');
const params = new URLSearchParams(url)

console.log(url)
console.log(url.href)
console.log(url.origin)
for (let p of params){
    console.log(p);
}
// const url = new URL('http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926');
// const params = new URLSearchParams(url.search);
// const params2 = new URLSearchParams("")
// console.log(url.href)
// console.log(url.origin)

