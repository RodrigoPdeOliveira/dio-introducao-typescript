let weight = document.getElementById("weight") as HTMLInputElement;
let height = document.getElementById("height") as HTMLInputElement;
let button = document.getElementById("button") as HTMLInputElement;
let result = document.getElementById("result") as HTMLDivElement;

function calculateBMI (weight: number, height: number): number {
    return weight / (height * height)
}

button.addEventListener("click", () => {
    let bmi = calculateBMI(weight.valueAsNumber, height.valueAsNumber)
    if (!isNaN(bmi) && weight.valueAsNumber > 0 && height.valueAsNumber > 0) {
        result.innerHTML = `Seu IMC é de ${bmi.toFixed(1)} kg/m².`
        if (bmi >= 18.5 && bmi <= 24.9) {
            result.style.color = "green"
        } else {
            result.style.color = "red"
        }
        weight.value = ""
        height.value = ""
    } else {
        weight.value = ""
        height.value = ""
        alert("Os valores devem ser inseridos corretamente.")
    }
})