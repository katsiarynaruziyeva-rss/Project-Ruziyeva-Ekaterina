export function initial() {
  let input = document.querySelector(".search__input"); //поиск первого селектора с классом
  input.value = "";
  const btnSortBox = document.getElementById("boxOffice");
  let btnPrevChecked = document.getElementsByClassName(
    "button button_checked"
  )[0];
  btnPrevChecked.classList.remove("button_checked"); //удалили у элемента основные классы
  btnSortBox.classList.add("button_checked"); //добавили элементу основные классы
}
