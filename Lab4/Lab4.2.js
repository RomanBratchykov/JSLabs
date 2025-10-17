var output1 = findMinLengthOfThreeWords("a", "be", "see");
console.log(output1); // --> 1
var output2 = filterOddElements([1, 2, 3, 4, 5, 6]);
console.log(output2); // --> [1, 3, 5]
var output3 = getLengthOfShortestElement(["one", "two", "three", "four"]);
console.log(output3); // --> 3
var output4 = joinArrayOfArrays([1, 4], [true, false], ["x", "y"]);
console.log(output4); // --> [1, 4, true, false, "x", "y"]
var output5 = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output5); // --> 4
var output6 = computeSummationToN(6);
console.log(output6); // --> 21
var output7 = convertScoreToGrade(91);
console.log(output7); // --> 'A'
var output = getLongestOfThreeWords("these", "three", "words");
console.log(output); // --> "these"
var ouput = multiply(4, 7);
console.log(ouput); // --> 28
var output = computeSumBetween(2, 5);
console.log(output); // --> 9
function findMinLengthOfThreeWords(word1, word2, word3) {
    return Math.min(word1.length, word2.length, word3.length);
}
function filterOddElements(arr){
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
}
function getLengthOfShortestElement(arr){
    if (arr.length === 0) return 0;
    return Math.min(...arr.map(function(str) {
        return str.length;
    }));
}
function joinArrayOfArrays(...arrays){
    return arrays.flat();
}
function findSmallestNumberAmongMixedElements(arr){
    var numbers = arr.filter(function(element) {
        return typeof element === 'number';
    });
    if (numbers.length === 0) return undefined;
    return Math.min(...numbers);
}
function computeSummationToN(n){
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function convertScoreToGrade(score){
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}  
function getLongestOfThreeWords(word1, word2, word3){
    var longest = word1;
    if (word2.length > longest.length) longest = word2;
    if (word3.length > longest.length) longest = word3;
    return longest;
}
function multiply(x, y){
    return x * y;
}
function computeSumBetween(num1, num2){
    var sum = 0;
    for (var i = num1; i < num2; i++){
        sum += i;
    }
    return sum;
}
