/*
    array challenge
*/
let zero=0;
let conter=3;
let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ammer"]
// write code here 
console.log(my.slice(zero,++conter).reverse())
console.log(my.slice(++zero,--conter).reverse())
console.log(my[--conter].slice(--zero,conter)+my[++zero].slice(conter))
console.log(my[zero].slice(-conter,-zero)+my[++conter][--zero])
let item='good job zakaria you desirve a middle'
console.log(`this message for you ${item}`)
