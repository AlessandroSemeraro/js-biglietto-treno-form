
const buttonSubmit = document.getElementById('buttonSubmit');

buttonSubmit.addEventListener('click', function()   {

    const inputName = document.getElementById('inputName').value;

    const inputKm = parseFloat(document.getElementById('inputKm').value);

    const inputAge = parseInt(document.getElementById('inputAge').value); 

    let priceTicket = inputKm * 0.1976
    
    if (inputAge < 18) {
        priceTicket= (priceTicket - (priceTicket / 100) * 17.65).toFixed(2);
        //console.log (priceTicket)
    }
        else if (inputAge >= 65) {
        priceTicket= (priceTicket - (priceTicket / 100) * 53.27).toFixed(2);
        //console.log (priceTicket)
    }
        else {
        priceTicket = priceTicket.toFixed(2)
    }

    userName.innerHTML = inputName;
    priceTicketFinal.innerHTML = priceTicket +'&euro;';
    //console.log(priceTicket)    
}
)



