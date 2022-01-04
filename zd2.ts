const N: number = 7;

let NArr = [0];
// ниже идет циклы заполнения массива
for (let i=1; i<N; i++){
 NArr.splice(i,0,0)
}
for (let i=0; i<N; i++){
  NArr.splice(i+N,0,i+1)
}
// в вункции идет смена мест чисел между собой 
function swap(arr, frstElm, scndElm){
    let temp = arr[frstElm];
    arr[frstElm]=arr[scndElm];
    arr[scndElm]=temp;
}
// функция вычисления факториала
function FACTfun( N: number){
    let fact: number = 1;
    for(let i =0; i<N;i++){
        fact = fact * (N-i)
    }
    return fact;
}
// высчитывание нужного колличества комбинаций
let P: number = FACTfun(NArr.length)/FACTfun(N);
console.log("Required number of permutations: " + P)

//вывод первой строки в файл
let require: any;
const fs = require('fs')
fs.writeFileSync("txt.txt", "All combinations of string N = "+ N +" and are of the kind - "+ NArr +" :",  "ascii")


console.log("So many lines are written to the file:\n")
let factNA = FACTfun(NArr.length);
let a = NArr;
// создание перестановок
for(let i=0;i<factNA;i++){
    let j = NArr.length - 2;

    while (j != -1 && NArr[j] >= NArr[j + 1]) j--;
    if (j == -1) break;

    fs.appendFileSync("txt.txt", "\n",  "ascii")
    let k = NArr.length - 1;
    while (NArr[j] >= NArr[k]) k--;

    swap(NArr, j, k);
    let l = j + 1;
    let r = NArr.length - 1;
    while (l<r)
    swap(NArr, l++, r--);
    // запись в файл 
    fs.appendFileSync("txt.txt", `${NArr}`,  "ascii")

}
// считывание строк
const data = fs.readFileSync('txt.txt').toString();
console.log(data.split('\n').length);