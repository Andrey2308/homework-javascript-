// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function stepen(importance) {
//     resultMatematikCub = Math.pow (importance, 3) + Math.pow (importance, 3);
//     console.log = (`Результат выражения 2^3 + 3^3 равен: ${resultMatematikCub}`);
// }

// stepen (importance);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

    
// const check = () => {
//     const userNumber = Number(prompt(`Задайте число:`));
//     if (isNaN(userNumber)) { console.log(`Задано не верно`)}
//     else { Callculation(userNumber);}
    
// }

// const money =(userNumber) => {
//     salary = userNumber * 0.13;
//     console.log (`Размер заработной платы составлет: ${userNumber}
//                   Вычет налога 13% из заработной платы составит: ${salary}`);
// }

// // check();


// // Задание 3
// // Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// // function Maximum() {

// //     let array = new Array;

// //     array.unshift (Number (promt('Задайте 1 число')));
// //     array.unshift (Number (promt('Задайте 2 число')));
// //     array.unshift (Number (promt('Задайте 3 число')));

// //     let maximumNumber = array[0];

// //     for (let i = 0; i < array.length+1; i++) {
// //         if (array[i] > maximumNumber) maximumNumber = array[i]; 
// //     }

// //     console.log (`Из заданных пользователем значений ${array[0]}, ${array[1]}, ${array[2]} максимальным является значение ${maximumNumber}`);
// // }

// // Maximum();


// // Задание 4
// // Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из 
// // операций (каждая функция выполняет одну из них):
// // 1. Сложение
// // 2. Разность
// // 3. Умножение
// // 4. Деление
// // Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// // должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут 
// // отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность,
// // функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда 
// // передаются корректные числа, проверки на NaN, Infinity делать не нужно.


// let addition = (a, b) => {
//     return result = a + b;
// }

// console.log (`результат сложения 2 и 6 будет: ${addition(2, 6)}`);

// let difference = (a, b) => {
//     min = a;
//     max = b;

//     if (a > b) { max = a; min = b;}
//     return result = max - min;
// }

// console.log (`результат вычитания 6 и 2 будет: ${difference(2, 6)}`);


// let multiplication = (a, b) => {
//     return result = a * b;
// }

// console.log (`результат умножение 2 и 6 будет: ${multiplication(2, 6)}`);

// let division = (a, b) => {
//     return result = a / b;
// }

// console.log (`результат деления 2 и 6 будет: ${division(2, 6)}`);
