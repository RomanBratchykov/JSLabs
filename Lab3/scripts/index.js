function str_del() {
// Метод getSelection() повертає об'єKT selection, що представляє діапазон
//тексту, який був виділений користувачем, або поточну позицію курсору
selection = window.getSelection().toString();
//console.log(selection);
 var str = document.getElementById("elem")
// Метод.innerHTML дозволяє отримати текстовий вміст елемента
.innerHTML;
// Метод indexOf() починає пошук і повертає індекс першого
// знайденого збігу із значення
var start = str.indexOf(selection);
var end = start+selection.length;
var result = str.slice(0, start) + str.slice(end);
//console.log(result);
//Заповнюємо текстовий вміст елемента
document.getElementById("elem").textContent = " ";
}
function deleteLastChar() {
            // Отримуємо елемент
            var elem = document.getElementById("elem");
            // Отримуємо його текст
            var text = elem.textContent;
            // Видаляємо останній символ
            elem.textContent = text.slice(0, -1);
        }