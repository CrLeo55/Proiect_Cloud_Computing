const express = require('express');
const app = express();
app.use('/', express.static('public'));


app.get('/randomTaco', (req, res) => {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    function trimiteDatePtTaco()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            res.send(myRequest.responseText);
        }
    }
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = trimiteDatePtTaco;
    myRequest.open("GET", "http://taco-randomizer.herokuapp.com/random/", true);
    myRequest.send(null);
})


app.get('/randomBeer', (req, res) => {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    function trimiteDatePtBere()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            res.send(myRequest.responseText);
        }
    }
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = trimiteDatePtBere;
    myRequest.open("GET", "https://api.punkapi.com/v2/beers/random", true);
    myRequest.send(null);
})

app.listen(8080, () => console.log('Accesul se va face utilizand portul 8080. POFTA MARE!'));

