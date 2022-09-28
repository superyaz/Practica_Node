const fruits = ["apple", "melon", "mango", function () {
    console.log("Prueba función anónima");
}];

console.log(fruits[3]());

for (const fruit of fruits) {
    console.log(fruit);
}

for (let i = 0; i <= fruits.length; i++) {
    console.log(i);
}