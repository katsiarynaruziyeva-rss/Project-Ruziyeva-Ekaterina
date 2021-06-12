export function searchFilm() {
  let filmList = document.getElementsByClassName("card-header__title");
  let input = document.querySelector(".search__input");
  let titles = document.querySelectorAll(".card-header__title");

  const handleSearch = function () {
    let regex = new RegExp(input.value, "gi"); //глобальное совпадение без регистра
    titles.forEach(function (title) {
      title.style.color = "#353535";
      let matchAll = title.innerHTML.match(regex); //вернули совпадения с регулярным выражением и заменили его в тайтле
      if (input.value.length >= 2 && matchAll != null) {
        title.style.color = "red";
      }
    });
  };
  input.addEventListener("input", handleSearch);
}
