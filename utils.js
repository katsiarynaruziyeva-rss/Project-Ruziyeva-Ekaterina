//возвращает целое число от beg до end
export function getRandomInt(beg, end) {
  let x = Math.random() * (end - beg + 1) + beg;
  return parseInt(x);
}

//удаляет все дочерние элементы
export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function formatMoney(str) {
  if (str === "N/A") {
    return "N/A";
  } else {
    let temp = str.split(","); //строка на массив через запятую
    let strNew = temp.join(""); //строка из массива без запятых слитно
    return parseInt(strNew.substring(1)); //в строке  первые две цифры вернуть целым числом
  }
}
