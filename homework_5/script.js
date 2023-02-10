// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,
// };

// searchValue = (numbers) => {
//   for (key in numbers) {
//     if (numbers[key] >= 3) console.log(numbers[key]);
//   }
// };

// searchValue(numbers);

// Задание 2
// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [{
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// searchObject = (post, author, dislikes, userId, text) => {
//   const bent1 = "author",
//     bent2 = "dislikes",
//     bent3 = "userId",
//     bent4 = "text";

//   for (key in post) {
//     if (typeof post[key] == "object") {
//       for (let i = 0; i < post[key].length; i++) {
//         if (typeof post[key][i] == "object") {
//           for (nested1 in post[key][i]) {
//             if (bent3 == nested1 && post[key][i][nested1] == userId)
//               console.log(`userId: ${post[key][i][nested1]}`);
//             if (bent4 == nested1 && post[key][i][nested1] == text)
//               console.log(`text: ${post[key][i][nested1]}`);
//             if (typeof post[key][i][nested1] == "object") {
//               for (nested2 in post[key][i][nested1]) {
//                 if (
//                   bent2 == nested2 &&
//                   post[key][i][nested1][nested2] == dislikes
//                 )
//                   console.log(`dislikes: ${post[key][i][nested1][nested2]}`);
//               }
//             }
//           }
//         }
//       }
//     } else {
//       if (bent1 == key && post[key] == author)
//         console.log(`Author: ${post[key]}`);
//     }
//   }
// };

// searchObject(
//   post,
//   (author = "John"),
//   (dislikes = 2),
//   (userId = 5),
//   (text = "lorem ipsum 2")
// );

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [{
//     id: 3,
//     price: 200,
// },
// {
//     id: 4,
//     price: 900,
// },
// {
//     id: 1,
//     price: 1000,
// },
// ];

// discountProducts = (products, discount) => {
//     products.forEach(function(item , i) {

//         sizeDiscount = products[i].price * discount;
//         products[i].price = products[i].price - sizeDiscount;

//     });
// }

// discountProducts(products, discount = 0.15);

// console.log(products);

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: ["1.jpg", "2.jpg"],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: ["3.jpg"],
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ];

// [];

//4.1

// searchPhoto = (products) => {
//   let array = [];
//   products.filter(function (item, i) {
//     if (products[i].photos != false && products[i].photos != undefined)
//       console.log(products[i]);
//   });
// };
// searchPhoto(products);

// 4.2;

// sortArray = (products) => {
//   total = products.sort(function (a, b) {
//     return a.price - b.price;
//   });
//   console.log(total);
// };

// sortArray(products);
