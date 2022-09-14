let params = new URL(document.location).searchParams;

function displayOrderId(){
    let orderId = params.get('orderId');

    console.log(orderId)
    
    let displayOrderId = document.getElementById('orderId');
    
    displayOrderId.innerHTML = orderId;
}

displayOrderId()