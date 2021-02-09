function contar(){
    var ini = document.getElementById('txtinicio')
    var fm = document.getElementById('txtfim')
    var pas = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fm.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: '
    
        var i = Number(ini.value)
        var f = Number(fm.value)
        var p = Number(pas.value)

        
        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449} `
        }
    }

    
}