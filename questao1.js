let numa = 0;
let numb = 1;
let numc = 0;

let fibonacci = "";

fibonacci += numa + " " + numb;

for(let contador = 1; contador <= 15; contador ++){
    numc = numa + numb;
    fibonacci += " " + numc;
    numa = numb;
    numb = numc;
}

console.log(fibonacci);
numero = 36;
regex = /36/;
result = regex.test(fibonacci);
console.log(result)