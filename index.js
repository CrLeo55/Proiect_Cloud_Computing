const express = require('express');
const app = express();
app.use('/', express.static('public'));


app.get('/randomTaco', (req, res) => {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    function trimiteDate()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            res.send(myRequest.responseText);
        }
    }
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = trimiteDate;
    myRequest.open("GET", "http://taco-randomizer.herokuapp.com/random/", true);
    myRequest.send(null);
})


app.get('/randomBeer', (req, res) => {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    function trimiteDateINPULA()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            res.send(myRequest.responseText);
        }
    }
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = trimiteDateINPULA;
    myRequest.open("GET", "https://api.punkapi.com/v2/beers/random", true);
    myRequest.send(null);
})

app.listen(8080, () => console.log('Accesul se va face utilizand portul 8080. POFTA MARE!'));

