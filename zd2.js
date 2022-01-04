var N = 7;
var NArr = [0];
// ниже идет циклы заполнения массива
for (var i = 1; i < N; i++) {
    NArr.splice(i, 0, 0);
}
for (var i = 0; i < N; i++) {
    NArr.splice(i + N, 0, i + 1);
}
// в вункции идет смена мест чисел между собой 
function swap(arr, frstElm, scndElm) {
    var temp = arr[frstElm];
    arr[frstElm] = arr[scndElm];
    arr[scndElm] = temp;
}
// функция вычисления факториала
function FACTfun(N) {
    var fact = 1;
    for (var i = 0; i < N; i++) {
        fact = fact * (N - i);
    }
    return fact;
}
// высчитывание нужного колличества комбинаций
var P = FACTfun(NArr.length) / FACTfun(N);
console.log("Required number of permutations: " + P);
//вывод первой строки в файл
var require;
var fs = require('fs');
fs.writeFileSync("txt.txt", "All combinations of string N = " + N + " and are of the kind - " + NArr + " :", "ascii");
console.log("So many lines are written to the file:\n");
var factNA = FACTfun(NArr.length);
var a = NArr;
// создание перестановок
for (var i = 0; i < factNA; i++) {
    var j = NArr.length - 2;
    while (j != -1 && NArr[j] >= NArr[j + 1])
        j--;
    if (j == -1)
        break;
    fs.appendFileSync("txt.txt", "\n", "ascii");
    var k = NArr.length - 1;
    while (NArr[j] >= NArr[k])
        k--;
    swap(NArr, j, k);
    var l = j + 1;
    var r = NArr.length - 1;
    while (l < r)
        swap(NArr, l++, r--);
    // запись в файл 
    fs.appendFileSync("txt.txt", "".concat(NArr), "ascii");
}
// считывание строк
var data = fs.readFileSync('txt.txt').toString();
console.log(data.split('\n').length);
