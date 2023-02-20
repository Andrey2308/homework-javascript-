//1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы
// браузером

// document.addEventListener('DOMContentLoaded', console.log('все теги прогрузились'));

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут
// загружены.

// document.addEventListener('load', console.log('страница загрузилась'));

// 3.  При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// const tagPage = document.body.querySelectorAll(
//   "button, img, text, p, li, ul "
// );
// tagPage.forEach((item) => {
//   item.onclick = () => {
//     checkClass(item);
//   };
// });

// function checkClass(elem) {
//   if (elem.attributes.class) {
//     if (elem.attributes.class.value === "super_element") {
//       console.log("класс super_element присутствует");
//     } else {
//       console.log("класс отсутствует");
//     }
//   } else {
//     checkAttribute(elem);
//   }
// }

// function checkAttribute(el) {
//   if (elem.attributes) {
//     let arrayAttribute = Array.from(elem.attributes);
//     const text = "атрибут присутствует".toLowerCase();
//     arrayAttribute.forEach((item) => {
//       console.log(text + item.nodeName);
//     });
//   }
//   if (elem.attributes.length == 0) {
//     const text = "нет атрибутов".toLowerCase();
//     console.log(text);
//   }
// }

// 4. cделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea.

// document.querySelector('textarea').onmouseover = () => {
//     console.log('вы навели на textarea');
// }

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить
// текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по
// кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

// document.querySelector("ul").onclick = (e) => {
//   if (e.target.children[0]) {
//     console.log(e.target.children[0].textContent);
//   }
// };

// 6.Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из
// 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием,
//  своими словами

// работа интерпретатора заключается в построчном выполнении кода

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

// const element = Array.from(document.querySelectorAll("li"));
// element.forEach(function (item, i) {
//   if (i % 2) item.style.background = "red";
// });
