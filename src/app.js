//JS type safe bir dil değildir.
console.log("Merhaba Kodlama.io")

let dolarBugun = 9.30
let dolarDun = 9.20
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.5
// euroDun = 11 Bunu yapamıyoruz

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

