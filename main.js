console.log("running");

let carts = document.querySelectorAll('add-cart');
console.log('carts');
console.log(typeof carts)

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers();
        
    })
}
function cartNumbers (){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers); 

if (productNumbers){
    localStorage.setItem('cartNumbers',productNumbers);
    document.querySelector('.cart span').textContent = productNumbers + 1;
}
 else{
     localStorage.setItem('cartNumbers',1);
     document.querySelector('.cart span').textContent = 1 ; 
 }   

}
    