const fs = require('fs');


var worksFile = fs.readFileSync('./works-data/works-data.json');
var works = JSON.parse(worksFile);

var elCasarWork = fs.readFileSync('./works-data/el_casar.json');
var graficaWork = fs.readFileSync('./works-data/grafica.json');
var evocarteWork = fs.readFileSync('./works-data/evocarte.json');
var kynesitWork = fs.readFileSync('./works-data/kynesit.json');
var beExpandWork = fs.readFileSync('./works-data/beExpand.json');


const principalRoute = (req, res) => {

    res.render('common/header', {
        works: works
    });

}

const graficaWorkRoute = (req, res) => {

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

module.exports = {
    principalRoute,
    graficaWorkRoute
}