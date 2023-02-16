// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// []()

// const array = Array.from(document.querySelectorAll(".dropdown-item"));
// array.forEach(function (item) {
//   item.classList.add("super-dropdown");
// });


// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у 
// этого элемента, либо добавить, если такого класса у элемента не было.

// const resultSecondary = document
//   .querySelectorAll(".btn")[0]
//   .classList.contains("btn-secondary")

// function testClass(resultSecondary) {
//   if (resultSecondary) {
//     resultSecondary = false
//     document.querySelectorAll(".btn")[0].classList.remove("btn-secondary")
//   } else {
//     resultSecondary = true
//     document.querySelectorAll(".btn")[0].classList.add("btn-secondary")
//   }
// }

// testClass(resultSecondary)
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu"

// document.querySelectorAll('.menu')[0].classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

// document.querySelector('div.dropdown').insertAdjacentHTML('afterend', `<a href='#'>link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown"

// document.querySelector('#dropdownMenuButton').setAttribute('id', 'superDropdown');

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" 
// равный "dropdownMenuButton" используя dataset.

// document.querySelectorAll('[aria-labelledby=dropdownMenuButton]')[0].setAttribute('data-dd', 3);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle"

// document.querySelectorAll('.dropdown-toggle[type]')[0].removeAttribute('type');