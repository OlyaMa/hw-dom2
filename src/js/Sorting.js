export class Sorting {
  constructor(elementsForSorting) {
    this.elementsForSorting = elementsForSorting;
  }

  static putArray(array, columnName) {
    if (document.querySelector(".arrow")) {
      document.querySelector(".arrow").remove();
    }
    const arr = Array.from(document.querySelectorAll("th")).find(
      (element) => element.textContent === columnName,
    );
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
    return this.elementsForSorting.sort((a, b) =>
      a.dataset.title.localeCompare(b.dataset.title),
    );
  }

  sortAscendingTitle() {
    Sorting.putArray("↑", "title");
    return this.elementsForSorting
      .sort((a, b) => a.dataset.title.localeCompare(b.dataset.title))
      .reverse();
  }

  sortDescendingYear() {
    Sorting.putArray("↓", "year");
    return this.elementsForSorting.sort(
      (a, b) => a.dataset.year - b.dataset.year,
    );
  }

  sortAscendingYear() {
    Sorting.putArray("↑", "year");
    return this.elementsForSorting.sort(
      (a, b) => b.dataset.year - a.dataset.year,
    );
  }

  sortDescendingImdb() {
    Sorting.putArray("↓", "imdb");
    return this.elementsForSorting.sort(
      (a, b) => a.dataset.imdb - b.dataset.imdb,
    );
  }

  sortAscendingImdb() {
    Sorting.putArray("↑", "imdb");
    return this.elementsForSorting.sort(
      (a, b) => b.dataset.imdb - a.dataset.imdb,
    );
  }
}
