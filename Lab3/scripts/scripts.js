var obj = {
    key: "value"
};
var output = getProperty(obj, "key");
console.log(output); // "value"
var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); // true
var obj = {
    name: 'Sam', age: 20
};
removeProperty(obj, 'name');
console.log(obj.name); // undefined
var ouptut1 = getFullName('Joe', 'Smith');
console.log(ouptut1); // "Joe Smith"
var output2 = getLenghtOfWord('some');
console.log(output2); // 4
var output3 = getLenghtOfTwoWords('some', 'words');
console.log(output3); // 9
var output4 = isGreaterThan(11, 10);
console.log(output4); // false
var output5 = isSameLength('words', 'word');
console.log(output5); // true
var output6 = isEvenAndGreaterThanTen(13);
console.log(output6); // false
var output7 = computeAreaOfATriangle(4, 6);
console.log(output7); // 12
function getProperty(obj, key) {
    return obj[key];
};
function addProperty(obj, key) {
    obj[key] = true;
};
function removeProperty(obj, key) {
    delete obj[key];
};
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
};
function getLenghtOfWord(word) {
    return word.length;
};
function getLenghtOfTwoWords(word1, word2) {
    return word1.length + word2.length;
};
function isGreaterThan(num1, num2) {
    return num1 > num2;
};
function isSameLength(word1, word2) {
    return word1.length === word2.length;
};
function isEvenAndGreaterThanTen(num) {
    return num > 10 && num % 2 === 0;
}
function computeAreaOfATriangle(base, height) {
    return (base * height) / 2;
}
