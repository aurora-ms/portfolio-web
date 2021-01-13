const fs = require('fs');


var worksFile = fs.readFileSync('./dataJsons/works-data.json');


var elCasarWork = fs.readFileSync('./dataJsons/el_casar.json');
var graficaWork = fs.readFileSync('./dataJsons/grafica.json');
var evocarteWork = fs.readFileSync('./dataJsons/evocarte.json');
var kynesitWork = fs.readFileSync('./dataJsons/kynesit.json');
var beExpandWork = fs.readFileSync('./dataJsons/beExpand.json');


var about = fs.readFileSync('./dataJsons/about.json');

const principalRoute = (req, res) => {
    var works = JSON.parse(worksFile);
    res.render('index', {
        works: works
    });

}

const worksRoute = (req, res) => {

    switch (req.params.work) {
        case "el_casar":
            var showData = JSON.parse(elCasarWork);
            break;
        case "grafica_escenica":
            var showData = JSON.parse(graficaWork);
            break;
        case "kynesit":
            var showData = JSON.parse(kynesitWork);
            break;
        case "evocarte":
            var showData = JSON.parse(evocarteWork);
            break;
        case "beExpand":
            var showData = JSON.parse(beExpandWork);
            break;
        default:
            break;
    }
    res.render('worksPage', { showData: showData[0] });

}

const aboutRoute = (req, res) => {
    var showData = JSON.parse(about);
    res.render('about', { about: showData });
}

module.exports = {
    principalRoute,
    worksRoute,
    aboutRoute
}