


function getApidata() {
    
    $.get("https://api.coindesk.com/v1/bpi/currentprice.json", function (data, status) {
 
        // console.log(JSON.parse(data));

        var obj =JSON.parse(data);
        console.log(obj);
        console.log(obj.bpi["EUR"]);
        $(".paragraf1").text("EUR");
        $(".val_paragraf1").text(obj.bpi["EUR"].rate)

        console.log(obj.bpi["GBP"]);
        $(".paragraf2").text("GBP");
        $(".val_paragraf2").text(obj.bpi["GBP"].rate)

        console.log(obj.bpi["USD"]);
        $(".paragraf3").text("USD");
        $(".val_paragraf3").text(obj.bpi["USD"].rate)

    })

    
   

}

setInterval(getApidata,10000 );


$(document).ready(function () {
    $('#btn').click(function() {
        getApidata()
    });

});





