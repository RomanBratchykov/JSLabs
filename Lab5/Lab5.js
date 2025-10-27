function ComputeAreaOfRectangle(length, width){
    return length * width;
}
var area = ComputeAreaOfRectangle(4, 8);
console.log(area);
function ComputeAreaOfCircle(radius){
    return Math.PI * radius * radius;
}
var area = ComputeAreaOfCircle(4);
console.log(area);
function ComputePower(a, b){
    return Math.pow(a, b);
}
var power = ComputePower(2, 3);
console.log(power);
function computeSquareRoot(num){
    return Math.sqrt(num);
}
var squareRoot = computeSquareRoot(9);
console.log(squareRoot);
function getLengthOfThreeWords(word1, word2, word3){
    return word1.length + word2.length + word3.length;
}
var totalLength = getLengthOfThreeWords("some", "other", "words")
console.log(totalLength)
function joinArrays(arr1, arr2){
    return arr1.concat(arr2);
};
var joinedArray = joinArrays([1, 2], [3, 4]);
console.log(joinedArray);
function getProductOfAllElementsAtProperty(obj, key){
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }   
    return obj[key].reduce(function(product, num) {
        return product * num;
    }, 1);
}
var product = getProductOfAllElementsAtProperty({ key: [2, 3, 4] }, 'key');
console.log(product);
function sumDigits(num){
    if(num < 0){
        num = Math.abs(num);
        var firstNum = parseInt(num.toString().charAt(0));
        return num.toString().split('').reduce(function(sum, digit) {
        return sum + parseInt(digit, 10);
    }, 0) - 2* firstNum;
    }
    return num.toString().split('').reduce(function(sum, digit) {
        return sum + parseInt(digit, 10);
    }, 0);
}
var digitSum = sumDigits(1148);
console.log(digitSum);
var digitSumNGO = sumDigits(-316);
console.log(digitSumNGO);
function findSmallestNumberAmongMixedElements(arr){
    var numbers = arr.filter(function(element) {
        return typeof element === 'number';
    });
    if (numbers.length === 0) return undefined;
    return Math.min(...numbers);
}
function findShortestWordAmongMixedElements(arr){
    var words = arr.filter(function(element) {
        return typeof element === 'string';
    }); 
    if (words.length === 0) return undefined;
    return words.reduce(function(shortest, current) {
        return current.length < shortest.length ? current : shortest;
    });
}
var shortestNum = findSmallestNumberAmongMixedElements([4, 'linkoln', 9,
     "octopus"]);
var output = findShortestWordAmongMixedElements([4, 'two', 2, "three"]); 
console.log(output);
function modulo(num1, num2){
    if (num1 == 0){
        return 0;
    }
    if (num2 == 0) {
        return NaN; 
    }
    if (num1 < 0){
        num1 = Math.abs(num1);
        for (; num1 >= num2; ) {
        num1 -= num2;
    }
    return -num1;
    }
    for (; num1 >= num2; ) {
        num1 -= num2;
    }
    return num1;
}
var mod1 = modulo(25, 4);
console.log(mod1);
var mod2 = modulo(-25, 4);
console.log(mod2);
var mod3 = modulo(25, 0);
console.log(mod3);
function flipEveryNChar(input, n){
    var result = '';
    for (var i = 0; i < input.length; i += n) {
        var segment = input.slice(i, i + n);
        result += segment.split('').reverse().join('');
    }
    return result;
}
var input = "a short example";
var output = flipEveryNChar(input, 5);
console.log(output);
function detectOutlierValue(arr){
    var evenNumbers = arr.filter(function(num) {
        return num % 2 === 0;
    })
    var oddNumbers = arr.filter(function(num) {
        return num % 2 !== 0;
    })
        if (evenNumbers.length === 1) {
        return evenNumbers[0] + " is even, others are odd";
    }
    if (oddNumbers.length === 1) {
        return oddNumbers[0] + " is odd, others are even";
    }
    return "No outlier found";
}
var outlier1 = detectOutlierValue([2, 4, 6, 7, 8]);
console.log(outlier1);
var outlier2 = detectOutlierValue([1, 3, 5, 8, 7]);
console.log(outlier2);
var outlier3 = detectOutlierValue([1, 10, 1, 1]);
console.log(outlier3);
function findPairForSum(arr, targetSum){
    var seenNumber = new Set();
    for (var num of arr){
        var firstNum = targetSum - num;
        if (seenNumber.has(firstNum)){
            return [firstNum, num];
        }
        seenNumber.add(num);
    }
    console.log("No pair found");
}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);
function isMirrorReflection(str1, str2) {
    const normalize = (str) => str.toLowerCase().replace(/\s/g, '');

    const cleanStr1 = normalize(str1);
    const cleanStr2 = normalize(str2);

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
var mirror1 = isMirrorReflection("hello world", "orldhello w");
console.log(mirror1);
var mirror2 = isMirrorReflection("Hello", "Oellh");
console.log(mirror2);
var mirror3 = isMirrorReflection("Test", "Taste");
console.log(mirror3);
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === target) {
            return mid;
        } else if (guess < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
var arr = [1, 3, 16, 22, 31, 33, 34];
var index1 = binarySearch(arr, 31);
console.log(index1);
var index2 = binarySearch(arr, 4);
console.log(index2);
function Isogram(string){
    const normalizedStr = string.toLowerCase();
    const charSet = new Set();
    for (const char of normalizedStr) {
        if (char === ' ') continue;
        if(/^\d$/.test(char) === true) return false;
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
        }
    return true;
}
var iso1 = Isogram("lumberjacks");
console.log(iso1);
var iso2 = Isogram("background");
console.log(iso2);
var iso3 = Isogram("hello");
console.log(iso3);
var iso4 = Isogram("123abc");
console.log(iso4);
function isPalindrome(str){
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}
function findPalindromes(str){
    const words = str.split(' ');
    const palindromes = words.filter(word => isPalindrome(word));
    return palindromes;
}
var palindromes = findPalindromes("Madam Arora teaches malayalam");
console.log(palindromes);
var palindromes2 = findPalindromes("Hello world");
console.log(palindromes2);
