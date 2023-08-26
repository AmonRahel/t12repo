console.log("app.js!");
function generateNumbers() {
    var resultElement = document.getElementById("result");

    if (!resultElement) {
        console.warn("A #result elem nem található az oldalon.");
        return;

    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * (45 - 5 + 1)) + 5;
        resultElement.innerHTML += randomNumber + "<br>";
    }
}

generateNumbers();