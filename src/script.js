function calcularIdade() {

    let anoDigitado = document.getElementById("anoNascimento").value;
    let idade = 2025 - anoDigitado
    console.log(idade)
    document.getElementById("resultado").innerHTML = `Idade é: ${idade}`
}``

