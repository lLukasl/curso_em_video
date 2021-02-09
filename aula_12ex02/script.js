function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector(`div#res`)

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '250px')
        img.setAttribute('height', '250px')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'img/nenemm.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'img/jovemm.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'img/adultom.jpg')
            }else{
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else{
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'img/nenemf.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'img/jovemf.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'img/adultof.jpg')
            }else{
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)
    }
}