function Chutar() {
    let numeroSecreto = Math.floor(10*Math.random())
    console.log(numeroSecreto)
    let chute = document.getElementById("valor").value

    document.getElementById("resultado").innerHTML = "O número secreto é: " + numeroSecreto

    let certo =<img src = 
    
    if (chute == numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Acertou"
    }
    else {
        document.getElementById("resultado").innerHTML = "Errou"
    }
}

// 1- Gerar número aleatório entre 0 e 10 com número secreto.
// 2 - Substituir o texto por imagens ( carinha Feliz e carinha Triste).
// 3 - Mudar o Layout (cores, fundo, fontes).