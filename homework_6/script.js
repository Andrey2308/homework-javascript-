// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
// 5. Выведите содержимое тега title в консоль.
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// 8. Удалите тег h6 на странице.

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль

// const elementID = document.getElementById("super_link");
// if (elementID) console.log(elementID);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

// const cardLink = document.querySelectorAll(".card-link");
// for (let i = 0; i < cardLink.length; i++) {
//   cardLink[i].textContent = "ссылка";
// }

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

// const element = document.querySelectorAll(".card-link");
// for (let i = 0; i < element.length; i++) {
//   let cardBody = element[i].parentNode.getAttribute("class");
//   if (cardBody == "card-body") console.log(element[i]);
// }

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// const dataNumber = document.querySelectorAll("[data-number]");
// const searchValue = "50";

// function searchDataNumber(dataNumber, searchValue) {
//   for (let i = 0; i < dataNumber.length; i++) {
//     let number = dataNumber[i].getAttribute("data-number");
//     if (number == searchValue) console.log(dataNumber[i]);
//   }
// }

// searchDataNumber(dataNumber, searchValue);

// 5. Выведите содержимое тега title в консоль.

// document.querySelector('title').textContent;

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// console.log(document.getElementsByClassName("card-title")[0].parentNode);

// 7. Создайте тегp p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// const tag = document.querySelector('div.tag');
// const newEl = document.createElement('p');
//       newEl.textContent = 'Привет';
//       tag.prepend(newEl);

// 8.Удалите тег h6 на странице.

// document.querySelector("h6").remove();
