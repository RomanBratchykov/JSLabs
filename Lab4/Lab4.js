if (3 < 4){
    console.log("Yes")
};
function fib(n){
    if (n <= 1) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
};
console.log("fib(9) = " +  fib(9)); // 34

console.log((4 > 5) ? "yes" : "no"); // no

function checkAge(age) {
var stop = false, age = 23;
age > 18 ? (
    alert("Вітаємо Вас на нашій сторінці"), 
    document.location.assign("http://edition.cnn.com/").reload(true)
)
:
(stop = true, alert("Вхід заборонено"));
};
switch ("value1") {
case "value1":
console.log("The value is value1");
break;
// без "break" буде продовжувати виконуватися код нижче
// без перевірки логічних умов
case "value2":
console.log("The value is value2");
break;
case "value3":
console.log("The value is value3");
break;
default:
defaultAction();
}
let x = 0;
do {
console.log(x);
x++;
} while (x !== 5);
// prints @ to 4
let y = 0;
do {
console.log(y);
y++;
} while (y !== 5);
// prints 0 to 4

for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
        break;
    }
} // prints 0 to 3
var person = {fname: "John", Iname: "Doe", age:25};
var text = "";
var z;
for (z in person) {
text += person[z] + " ";
}
console.log(text); //"John Doe 25