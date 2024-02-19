const valorP = document.getElementById("paragrafo")
valorP.innerHTML += " Camila!"

const digitarNoInput = () => {
    const valorDoInput = document.getElementById("texto")
    console.log(valorDoInput.value)
}

const substituirValorP = () => {
    const valorDoInput = document.getElementById("texto")
    valorP.innerHTML = valorDoInput.value
}