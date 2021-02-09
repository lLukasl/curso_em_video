let num = [1,2,3,4,5,6,7,8,9, 11,12,13]

// for (n = 0; n < num.length; n++){
//     console.log(`posição ${n} tem o valor ${num[n]}`)
// }

for(let n in num){
    console.log(`posição ${n} tem o valor ${num[n]}`)
}