// function pour demarre le jeu
function startGame() {
document.getElementById("startGame").style.display="none";
document.getElementById("domandaUno").style.display="block";
}
// functions pour créer un array des résultats
var results = [];
// functions pour ajouter les résultats des réponses à un array
function addUno() {
results.push(document.querySelector('input[name="uno"]:checked').value);
console.log(results);
document.getElementById("domandaUno").style.display="none";
document.getElementById("domandaDue").style.display="block";
}
function addDue() {
results.push(document.querySelector('input[name="due"]:checked').value);
console.log(results);
document.getElementById("domandaDue").style.display="none";
document.getElementById("domandaTre").style.display="block";
}
function addTre() {
results.push(document.querySelector('input[name="tre"]:checked').value);
console.log(results);
document.getElementById("domandaTre").style.display="none";
document.getElementById("domandaQuattro").style.display="block";
}
function addQuattro() {
results.push(document.querySelector('input[name="quattro"]:checked').value);
console.log(results);
document.getElementById("domandaQuattro").style.display="none";
document.getElementById("domandaCinque").style.display="block";
}
function addCinque() {
results.push(document.querySelector('input[name="cinque"]:checked').value);
console.log(results);
document.getElementById("domandaCinque").style.display="none";
document.getElementById("domandaSei").style.display="block";
}
function addSei() {
results.push(document.querySelector('input[name="sei"]:checked').value);
console.log(results);
document.getElementById("domandaSei").style.display="none";
document.getElementById("domandaSette").style.display="block";
}
function addSette() {
results.push(document.querySelector('input[name="sette"]:checked').value);
console.log(results);
document.getElementById("domandaSette").style.display="none";
document.getElementById("domandaOtto").style.display="block";
}
function addOtto() {
results.push(document.querySelector('input[name="otto"]:checked').value);
console.log(results);
document.getElementById("domandaOtto").style.display="none";
document.getElementById("domandaNove").style.display="block";
}
function addNove() {
results.push(document.querySelector('input[name="nove"]:checked').value);
console.log(results);
document.getElementById("domandaNove").style.display="none";
document.getElementById("domandaDieci").style.display="block";
}
function addDieci() {
results.push(document.querySelector('input[name="dieci"]:checked').value);
console.log(results);
document.getElementById("domandaDieci").style.display="none";
document.getElementById("domandaUndici").style.display="block";
}
function addUndici() {
results.push(document.querySelector('input[name="undici"]:checked').value);
console.log(results);
document.getElementById("domandaUndici").style.display="none";
document.getElementById("domandaDodici").style.display="block";
}
function addDodici() {
results.push(document.querySelector('input[name="dodici"]:checked').value);
console.log(results);
document.getElementById("domandaDodici").style.display="none";
document.getElementById("finalVerification").style.display="block";
}
// vérifier dans l'array la lettre qu'a obtenu plus de réponse
function mode(results)
{
    if(results.length == 0)
        return null;
    var modeMap = {};
    var maxEl = results[0], maxCount = 1;
    for(var i = 0; i < results.length; i++)
    {
        var el = results[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
// function pour afficher le résultat final
function finalResults() {
    var x = mode(results);
    document.getElementById("finalVerification").style.display="none";
    document.getElementById(x).style.display="block";
}
// decocher les réponses lors du chargement de la page
function uncheckAll()
{
$("input:radio[name='uno']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='due']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='tre']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='quattro']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='cinque']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='sei']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='sette']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='otto']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='nove']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='dieci']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='undici']").each(function(i) {
        this.checked = false;
});
$("input:radio[name='dodici']").each(function(i) {
        this.checked = false;
});
}
// functions pour copier le résultat dans le presse-papier
function copyResultsAdele() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1922-a-1935/adele-de-rothschild.html");
var tooltip = document.getElementById("myTooltipAdele");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1922-a-1935/adele-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipAdele");
tooltip.innerHTML = "Copier dans le presse-papier";
}
function copyResultsHenri() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1922-a-1935/henri-de-rothschild.html");
var tooltip = document.getElementById("myTooltipHenri");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1922-a-1935/henri-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipHenri");
tooltip.innerHTML = "Copier dans le presse-papier";
}
function copyResultsAlice() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1922-a-1935/alice-de-rothschild.html");
var tooltip = document.getElementById("myTooltipAlice");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1922-a-1935/alice-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipAlice");
tooltip.innerHTML = "Copier dans le presse-papier";
}
function copyResultsAlix() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/jusqu-a-nos-jours/alix-de-rothschild.html");
var tooltip = document.getElementById("myTooltipAlix");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/jusqu-a-nos-jours/alix-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipAlix");
tooltip.innerHTML = "Copier dans le presse-papier";
}
function copyResultsAlphonse() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1873-a-1922/alphonse-de-rothschild.html");
var tooltip = document.getElementById("myTooltipAlphonse");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1873-a-1922/alphonse-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipAlphonse");
tooltip.innerHTML = "Copier dans le presse-papier";
}
function copyResultsBeatrice() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1922-a-1935/beatrice-ephrussi-de-rothschild.html");
var tooltip = document.getElementById("myTooltipBeatrice");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1922-a-1935/beatrice-ephrussi-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipBeatrice");
tooltip.innerHTML = "Copier dans le presse-papier";
}
function copyResultsCharlotte() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1873-a-1922/charlotte-de-rothschild.html");
var tooltip = document.getElementById("myTooltipCharlotte");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1873-a-1922/charlotte-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipCharlotte");
tooltip.innerHTML = "Copier dans le presse-papier";
}
function copyResultsEdmond() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1873-a-1922/edmond-de-rothschild.html");
var tooltip = document.getElementById("myTooltipEdmond");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1873-a-1922/edmond-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipEdmond");
tooltip.innerHTML = "Copier dans le presse-papier";
}

function copyResultsJames() {
clipboard.writeText("https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1873-a-1922/james-edouard-de-rothschild.html");
var tooltip = document.getElementById("myTooltipJames");
tooltip.innerHTML = "Copié : https://collections.rothschild.inha.fr/fr/mecenes/biographies-des-donateurs/de-1873-a-1922/james-edouard-de-rothschild.html";
}
function outFunc() {
var tooltip = document.getElementById("myTooltipJames");
tooltip.innerHTML = "Copier dans le presse-papier";
}
