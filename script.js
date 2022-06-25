var weight = document.getElementById("weight");
var height = document.getElementById("height");
var button = document.getElementById("button");
var result = document.getElementById("result");
function calculateBMI(weight, height) {
    return weight / (height * height);
}
button.addEventListener("click", function () {
    var bmi = calculateBMI(weight.valueAsNumber, height.valueAsNumber);
    if (!isNaN(bmi) && weight.valueAsNumber > 0 && height.valueAsNumber > 0) {
        result.innerHTML = "Seu IMC \u00E9 de " + bmi.toFixed(1) + " kg/m\u00B2.";
        if (bmi >= 18.5 && bmi <= 24.9) {
            result.style.color = "green";
        } else {
            result.style.color = "red";
        }
        weight.value = "";
        height.value = "";
    } else {
        weight.value = "";
        height.value = "";
        alert("Os valores devem ser inseridos corretamente.");
    }
});
