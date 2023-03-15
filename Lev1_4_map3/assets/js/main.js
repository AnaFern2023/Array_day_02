console.log("Hey");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let fahrenheitCelsius = fahrenheit.map((fa) => {
    return ((fa - 32) / 1.8).toFixed(0)
})

console.log(fahrenheitCelsius);


// let fahrenheitCelsius2 = fahrenheit.map((fa) => {
//     let Celsius = Math.round((fa - 32) / 1.8)
//     console.log(Celsius)
// })
