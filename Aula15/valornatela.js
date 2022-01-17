let num = [5, 2, 8, 9]

num[4]= 0   //Adiciona um valor ao arrey especificando em qual indice
num.push(7) //Acrescenta um valor ao arrey sem prescisar especificar o indice
num.sort()  //Ordem crescente

/*
for (c=0; c<num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
*/

for (let c in num) { //Faz a mesma coisa do for de cima porem mais simplificado
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}