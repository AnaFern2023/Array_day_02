console.log("Hello");

const text = document.querySelector('section');

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
console.log(getraenke);

let myDrinks = getraenke.forEach((drink) => {
    console.log(drink);
    text.innerHTML += (drink + "<br>");
})
