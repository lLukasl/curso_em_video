function parimpar(n){
    if (n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
let n = 3
let res = parimpar(n)
console.log(`O numero ${n} é: ${res}`)