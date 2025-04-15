/*   Project Standards:
    - Logging standards
    - Naming standards:
        function, method, variable => CAMEL
        class => PASCAL
        folder => KEBAB
        css => SNAKE
    - Error handling
*/

/*   Request:
    Tradition  API 
    Rest API
    GraphQL API
    ....
 */

/*   Frontend Development:
    Traditional FD  =>  SSR     =>   EJS
    Modern FD       =>  SPA     =>  REACT
 */

/*   Cookies:
    request join
    self destroy
*/

/*  Validation:
    Frontend validation
    Backend validation
    Database validation
*/


//H-TASK: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
//faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arrey: number[]) {
    let qiymat: number[] = [];  // buyerda bo'sh arrey berib ketyapmiz yani musbat sonlarni bo‘sh massivga qo‘shishimiz uchun
    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] >= 0) {
            qiymat.push(arrey[i]); // buyerda shart bajarilganda musbatni qiymat arreyiga push qiladi
        }
    }
    return qiymat.join("");
}

// console.log("H-TASK:", getPositive([1, -4, -2, 0]));

// H2-TASK: 
// Shunday function tuzing, unga string argument pass bolsin. 
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(son: string) {
    let qiymat: string = " ";
    for (let i = 0; i < son.length; i++) {
        if (son[i] >= "0" && son[i] <= "9") {
            qiymat += son[i];
        }
    }
    return qiymat;
}

// console.log("H2-TASK:", getDigits("m14i1t"));


// TASK I:
// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4
// Yuqoridag misolda argument sifatida kiritilayotgan 
// array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.
// TASK I: 1-usul
function majorityElement(arrey: number[]) {
    let qiymat: number[] = [];
    for (let i = 0; i < arrey.length; i++) {
        if (arrey.filter(son => son === arrey[i]).length > (arrey.filter(son => son === (qiymat[0] || 0)).length || 0)) {
            qiymat[0] = arrey[i];
        }

    }
    return qiymat;
}

// console.log("TASK I: 1-usul:", majorityElement([1, 2, 3, 4, 5, 4, 5, 4]));

// TASK I: 2-usul
function majorityElement1(arrey: number[]) {
    let qiymat = arrey[0];
    let count = 0;

    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] === qiymat) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            qiymat = arrey[i];
            count = 1;
        }
    }
    return qiymat;
}

// console.log("TASK I: 2-usul:", majorityElement1([1, 2, 3, 4, 5, 4, 3, 4]));


// TASK J:
// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.
// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"
// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

function findLongestWord(word: string) {

    const words = word.split(" ") // bu yerda stringni arrayga aylantiradi, har bir so'z alohida element bo'ladi.
    let longestWord = ""; // Eng uzun so'zni saqlash uchun o'zgaruvchi yaratilyapti

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) { //Agar hozirgi so'z uzunroq bo'lsa, longestWord qiymati yangilanadi
            longestWord = words[i];
        }
    }
    return longestWord;
}

// console.log("TASK J:", findLongestWord("I came from Uzbekistan !"));


// TASK K:
// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing
// MASALAN: countVowels("string"); return 1
// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda

function countVowels(word: string): number {
    const unli = ['a', 'e', 'i', 'o', 'u'];
    let count: number = 0;

    for (let i = 0; i < word.length; i++) {
        if (unli.includes(word[i])) { // .includes() ni massiv yoki satrda biror elementni borligini tekshirish uchun ishlatamiz.
            count++;
        }
    }
    return count;
}

// console.log("TASK K: ", countVowels("Abdukarim"));


// TASK L:
// So'zlarni ketma - ketligini buzmasdan har bir so'zni
// alohida teskarisiga o'girib beradigan fucntion tuzing.
// Funtion yagona string qabul qilsin
// MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
// Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda

// 1-usul
function reverseSentence(word: string) {

    const words = word.split(" ")
    let result = words.map(word => word.split('').reverse().join(''));

    return result.join(" ");
}
// console.log("TASK L: ", reverseSentence("we like coding!"));

// 2-usul
function reverseSentence1(word: string) {
    const words = word.split(" ");
    let result: string[] = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i].split('').reverse().join(''));
    }
    return result.join(" ");
}
// console.log("TASK L: ", reverseSentence1("we like coding!"));

// TASK M:
// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin
// MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) 
// return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];

function getSquareNumbers(numbers: number[]) {
    const Natija = [];

    for (let i = 0; i < numbers.length; i++) {
        const number: number = numbers[i];

        Natija.push({
            number: number,
            square: number * number,
        });
    }
    return Natija;
}

// console.log("TASK M: ", getSquareNumbers([1, 2, 3]));

// TASK N:
// Parametr sifatida yagona string qabul qiladigan function tuzing.
// Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// 'true' yokida 'false' qaytarsin.
// MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)
// *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// bir xil ma'noni beradigan so'zga aytiladi


function palindromCheck(word: string) {
    const words: string = word.split('').reverse().join('');
    if (words === word) {
        console.log(`true - ${word}`)
        return true
    } else
        console.log(`false - ${words}`);
    return false
}

// console.log(palindromCheck("dad"));


// TASK O:
// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45
// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

function calculateSumOfNumbers(raqam: any) {
    let sum: number = 0;
    for (let i = 0; i < raqam.length; i++) {
        if (typeof raqam[i] === "number") {
            sum += raqam[i];
        }
    }
    return sum;
}

const result = calculateSumOfNumbers([10, "10", { son: 10 }, false, 35])
// console.log("TASK O:", result);


// TASK P:
// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// 1- usul
function objectToArray(obj: {}) {
    return Object.entries(obj)
}
// console.log(objectToArray({ a: 10, b: 20 }));


// 2-usul
function objectToArray7(obj: { [key: string]: any }) {
    const result: [string, any][] = [];
    for (let key in obj) {
        if (key in obj) {
            result.push([key, obj[key]]);
        }
    }
    return result;
}

// console.log(objectToArray7({ a: 10, b: 20 }));


// TASK Q:
// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.
// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda
// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.

function hasProperty(obj: {}, key: string) {
    return obj.hasOwnProperty(key);

}
// console.log(hasProperty({ name: "BMW", model: "M3" }, "M3"));

function haskey(obj: {}, key: string) {
    return key in obj;
}
// console.log(haskey({ name: "BMW", model: "M3" }, "model"));

// hasValu() qiymatini. tekshirish
function hasValue(obj: {}, value: string) {
    return Object.values(obj).includes(value);
}
// console.log(hasValue({ name: "BMW", model: "M3" }, "M3")); 


// TASK R
// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin
// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// Usul 1
function calculate(str: string) {
    return eval(str) //eval() funksiyasi JavaScriptda string sifatida yozilgan kodni ishga tushiradi.
}
// console.log("Usul 1:", calculate("1 + 3"));

//Usul 2
function calculate2(str: string) {
    const [a, amal, c] = str.split(/([+\-*/])/);
    const num1 = Number(a);
    const num2 = Number(c);

    switch (amal) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}
// console.log("Usul 2:", calculate2("7 - 5"));

// TASK S
// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.
// MASALAN: missingNumber([3, 0, 1]); return 2
// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
// '2' soni tushib qolgan

function missingNumber(a: number[]) {
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(i) == -1) {
            return i
        }
    }

}
// console.log(missingNumber([0, 1, 3,5,8]));


function missingNumber1(a: number[]) {
    let count: number = a[a.length - 1];
    let missing: number[] = []
    for (let i = 0; i < count; i++) {
        if (a.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    return missing;
}
// console.log(missingNumber1([0, 1, 3]));


// TASK T
// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];
// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

function mergeSortedArrays(arr1: number[], arr2: number[]) {
    let combined = arr1.concat(arr2);
    for (let i = 0; i < combined.length; i++) {
        for (let j = i + 1; j < combined.length; j++) {
            if (combined[i] > combined[j]) {
                let temp = combined[i];
                combined[i] = combined[j];
                combined[j] = temp;
            }
        }
    }
    return combined;
}
//   console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 

// TASK U
// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

function sumOdds(son: number) {
    let count: number = 0;
    for (let i = 0; i < son; i++) {
        if (i % 2) {
            count++;
        }
    }
    return count;
}
// console.log("Natija:",sumOdds(11));

// TASK V
// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.


function countChars(ch: string) {
    let words = ch.split("");
    let obj: { [key: string]: number } = {};

    let a = 1, b = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i + 1]) {
            a++;
        } else {
            obj[words[i]] = a;
            a = 1;
        }
    }
    return obj;
}
// console.log(countChars("hello"))

// TASK W
// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

function chunkArray(arr: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],3));

// TASK X
// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.
// Eslatma => Nested object'lar ham sanalsin
// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2
// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

function countOccurrences(obj: Record<string, any>, keyToCount: string): number {
    let count = 0;
    const stack = [obj];

    while (stack.length > 0) {
        const obj2 = stack.pop();
        for (let key in obj2) {
            if (key === keyToCount) {
                count++;
            }
            if (typeof obj2[key] === 'object' && obj2[key] !== null) {
                stack.push(obj2[key]);
            }
        }
    }
    return count;
}

//console.log(countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model'));

// TASK Y
// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.

function findIntersection(arry1: any[], arry2: any[]) {
    let copyArray2 = [...arry2];
    let temp: any[] = [];

    for (let i = 0; i < arry1.length; i++)
        if (copyArray2.includes(arry1[i])) {//includes  massivning ichida qiymat borligini tekshiradi.
            temp.push(arry1[i]);
            copyArray2.splice(copyArray2.indexOf(arry1[1]))

        }
    return temp;
}

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// TASK Z
// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.
// MASALAN:sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;
// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

function sumEvens(numbers: number[]) {
    let sum = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

// console.log(sumEvens([1, 2, 3, 2])); 

// TASK ZA
// Shunday function yozing, u array ichidagi objectlarni
// 'age' qiymati bo'yicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]
// Yuqoridagi misolda, kichik raqamlar katta raqamlar tomon
// tartiblangan holatda return bo'lmoqda.


function sortByAgeWithMap(arr: { age: number }[]): { age: number }[] {
    const sortedArray: { age: number }[] = [];
    arr.map((item) => {
        const index = sortedArray.findIndex(sortedItem => item.age < sortedItem.age);
        if (index === -1) {
            sortedArray.push(item);
        } else {
            sortedArray.splice(index, 0, item);
        }
    });
    return sortedArray;
}
// console.log(sortByAgeWithMap([{ age: 23 }, { age: 21 }, { age: 13 }]));


// TASK ZC
// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.
// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;
// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.
// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

function celsiusToFahrenheit(n: number) {
    return ((n * 9 / 5) + 32);
}

// console.log(celsiusToFahrenheit(10));


// TASK ZD
// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];
// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.

function changeNumberInArray(son1: number, arry: any[], son2: number) {
    for(let i = 0; i < arry.length; i++) {
        if (i === son1) {
            arry[i] = son2
        }
    }

    return arry;
}
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));


// TASK ZE
// Shunday function yozing, uniygona string parametri mavjud bo'lsin.
// Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
// qiymatni qaytarsin.
// MASALAN: removeDuplicate('stringg') return 'string'
// Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
// funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
// qaytarmoqda.


function removeDuplicate(ch: string) {
    let words = ch.split("");

    for (let i = 0; i < words.length; i++) {
        words = words.filter((harf, indeks) => words.indexOf(harf) === indeks);
    }
    return words.join("") ;
}

//console.log(removeDuplicate('stringggggg'));


// TASK ZF

// Shunday function yozing, uni string parametri bo'lsin.
// Ushbu function, har bir so'zni bosh harflarini katta harf qilib qaytarsin.
// Lekin uzunligi 1 yoki 2 harfga teng bo'lgan so'zlarni esa o'z holicha
// qoldirsin.

// MASALAN: capitalizeWords('name should be a string'); return 'Name Should be a String';

// Yuqoridagi misolda, bizning function, uzunligi 2 harfdan katta bo'lgan so'zlarnigina,
// birinchi harfini katta harf bilan qaytarmoqda.

function capitalizeWords(str: string): string {
    return str
      .split(" ")
      .map(word => (word.length > 2 ? word[0].toUpperCase() + word.slice(1) : word))
      .join(" ");
  }
  //console.log(capitalizeWords("name should be a string"));


//   TASK ZG

//   String sifatida berilgan string parametrni
//   snake case'ga o'tkazib beradigan function yozing.
  
//   MASALAN: convertToSnakeCase('name should be a string')
//   return 'name_should_be_a_string'

function convertToSnakeCase(str: string) {
    return str.toLowerCase().split(' ').join('_');
}

console.log(convertToSnakeCase('name should be a string')); 
