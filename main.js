/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/tabGenerator.js
function createTab(jsonData) {
  const rows = [];
  jsonData.forEach(item => {
    rows.push(`<tr data-id=${item.id} data-title="${item.title}" data-year=${item.year} data-imdb=${item.imdb}>
        <td>#${item.id}</td>
        <td>${item["title"]}</td>
        <td>(${item.year})</td>
        <td>imdb: ${item.imdb.toFixed(2)}</td>
      </tr>`);
  });
  const tab = document.createElement("table");
  const firstRow = document.createElement("tr");
  firstRow.innerHTML = `<th>id</th><th>title</th><th>year</th><th>imdb</th>`;
  tab.appendChild(firstRow);
  rows.forEach(row => {
    tab.innerHTML += row;
  });
  document.body.appendChild(tab);
}
;// CONCATENATED MODULE: ./src/js/Sorting.js
class Sorting {
  constructor(elementsForSorting) {
    this.elementsForSorting = elementsForSorting;
  }
  static putArray(array, columnName) {
    if (document.querySelector(".arrow")) {
      document.querySelector(".arrow").remove();
    }
    const arr = Array.from(document.querySelectorAll("th")).find(element => element.textContent === columnName);
    const arrowElement = document.createElement("span");
    arrowElement.textContent = array;
    arrowElement.classList.add("arrow");
    arr.insertAdjacentElement("beforeend", arrowElement);
  }
  sortDescendingId() {
    Sorting.putArray("↓", "id");
    return this.elementsForSorting.sort((a, b) => a.dataset.id - b.dataset.id);
  }
  sortAscendingId() {
    Sorting.putArray("↑", "id");
    return this.elementsForSorting.sort((a, b) => b.dataset.id - a.dataset.id);
  }
  sortDescendingTitle() {
    Sorting.putArray("↓", "title");
    return this.elementsForSorting.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
  }
  sortAscendingTitle() {
    Sorting.putArray("↑", "title");
    return this.elementsForSorting.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title)).reverse();
  }
  sortDescendingYear() {
    Sorting.putArray("↓", "year");
    return this.elementsForSorting.sort((a, b) => a.dataset.year - b.dataset.year);
  }
  sortAscendingYear() {
    Sorting.putArray("↑", "year");
    return this.elementsForSorting.sort((a, b) => b.dataset.year - a.dataset.year);
  }
  sortDescendingImdb() {
    Sorting.putArray("↓", "imdb");
    return this.elementsForSorting.sort((a, b) => a.dataset.imdb - b.dataset.imdb);
  }
  sortAscendingImdb() {
    Sorting.putArray("↑", "imdb");
    return this.elementsForSorting.sort((a, b) => b.dataset.imdb - a.dataset.imdb);
  }
}
;// CONCATENATED MODULE: ./src/js/sortFunction.js

function sortFunction(nodeList, i) {
  const elementsForSorting = Array.from(nodeList);
  const sorting = new Sorting(elementsForSorting);
  const sortMethods = {
    0: () => sorting.sortDescendingId(),
    1: () => sorting.sortAscendingId(),
    2: () => sorting.sortDescendingTitle(),
    3: () => sorting.sortAscendingTitle(),
    4: () => sorting.sortDescendingYear(),
    5: () => sorting.sortAscendingYear(),
    6: () => sorting.sortDescendingImdb(),
    7: () => sorting.sortAscendingImdb()
  };
  return sortMethods[`${i}`]();
}
;// CONCATENATED MODULE: ./data.json
const data_namespaceObject = JSON.parse('[{"id":26,"title":"Побег из Шоушенка","imdb":9.3,"year":1994},{"id":25,"title":"Крёстный отец","imdb":9.2,"year":1972},{"id":27,"title":"Крёстный отец 2","imdb":9,"year":1974},{"id":1047,"title":"Тёмный рыцарь","imdb":9,"year":2008},{"id":223,"title":"Криминальное чтиво","imdb":8.9,"year":1994}]');
;// CONCATENATED MODULE: ./src/js/fetchData.js


// Здесь могла бы быть феч-функция загрузки файла.

function fetchData() {
  return data_namespaceObject;
}
;// CONCATENATED MODULE: ./src/js/app.js



function app() {
  createTab(fetchData());
  let i = 0;
  setInterval(() => {
    const resulOfSort = sortFunction(document.querySelectorAll("[data-id]"), i);
    i++;
    if (i === 8) {
      i = 0;
    }
    document.querySelectorAll("[data-id]").forEach(element => {
      element.remove();
    });
    document.querySelector("table").append(...resulOfSort);
  }, 2000);
}
app();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;