// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:


// for (let i = 0; i < 11; i++) {
//     if (i == 0) {console.log(`${i} - это ноль`);}
//     if (i != 0) {
//         if (i % 2) {console.log(`${i} - нечётное число`);}
//         else {console.log(`${i} - чётное число`);}
//     }
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
// let array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(3, 2); 
// console.log(array);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3



// 1.
// let array = [];

// for (let i = 0; i <= 9; i++) {
//     Math.floor(Math.random() * 9);
// }

// let arraySum = (array) => {
//     resultSum = 0;
//     for (let i = 0; i < array.length; i++) {
//         resultSum = resultSum + array[i]; 
//     }
//     return resultSum;
// }

// console.log(`Массив случайных чисел: ${array}, cумма всех элементов массива ${arraySum(array)}`);

// 2.


// let minNumber = (array) => {
//     min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]) min = array[i];
//     }
//     return min;
// }

// console.log(`минимальное значение  ${minNumber(array)}`);

// 3.

// let presentElement = (array, presentElement) => {
//     result = `элемент ${presentElement} отсутствует в массиве`;
//     for (let i = 0; i < array.length; i++) {
//         if ( array[i] == presentElement ) result = `элемент ${presentElement} присутствует в массиве`;
//     }
//     return result;
// }
// console.log(`${presentElement(array, 3)}`);

// 4.

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:


// let star = `*`;

// for (let i = 1; i < 20; i++) {
//     console.log(star.repeat(i));   
// }
