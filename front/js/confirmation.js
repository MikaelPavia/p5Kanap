let params = new URL(document.location).searchParams;


//  Afficher l'identifiant de commande en le récupérant dans l'url de la page


function displayOrderId(){
    let orderId = params.get('orderId');

    console.log(orderId)
    
    let displayOrderId = document.getElementById('orderId');
    
    displayOrderId.innerHTML = orderId;
}

displayOrderId()