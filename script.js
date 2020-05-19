function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ("txtano")
    var res = document.querySelector ("div#res") // mesma coisa que o comando acima, so que de outra forma (Mais atualizada)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ("[Error!] Verifique os dados e tente novamente !")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.getAttribute("id", "foto")
        if(fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criancahomem.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovenhomem.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultohomem.jpg')
            }else {
                // idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criancamulher.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultomulher.jpg')
            }else {
                // idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos"
        res.appendChild(img)
    }
}