// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально
// отображаться в span. То есть при печати в input'е тег span также должен меняться

// const dataInput = document.querySelector("input#from");
// const textDisplay = document.querySelector("input#from").nextElementSibling;

// dataInput.oninput = () => {
//   textDisplay.textContent = dataInput.value;
// };

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// const btnMsg = document.querySelector("button.messageBtn");
// const elemMsg = document.querySelector("div.message");

// btnMsg.onclick = () => {
//   elemMsg.classList.add("animate_animated");
//   elemMsg.classList.add("animate_fadeInLeftBig");
//   elemMsg.style.visibility = "visible";
// };

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
// Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены
// незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь
// начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// const clickForm = document.querySelectorAll("button")[1];
// const formControl = document.querySelector("input.form-control");
// const selectFormControl = document.querySelector("select.form-control");

// clickForm.onclick = (event) => {
//   if (dataInput.value || formControl.value || selectFormControl.value) {
//     event.preventDefault();
//     if (dataInput.value) {
//       dataInput.style.background = "green";
//       dataInput.classList.add("error");
//     }

//     if (formControl.value) {
//       formControl.style.background = "green";
//       formControl.classList.add("error");
//     }

//     if (selectFormControl.value) {
//       selectFormControl.style.background = "green";
//       selectFormControl.classList.add("error");
//     }
//   }

//   if (dataInput.value) {
//     dataInput.removeAttribute("style");
//     dataInput.classList.remove("error");
//   }

//   if (formControl.value) {
//     formControl.removeAttribute("style");
//     formControl.classList.remove("error");
//   }

//   if (selectFormControl.value) {
//     selectFormControl.removeAttribute("style");
//     selectFormControl.classList.remove("error");
//   }
// };
