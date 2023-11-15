import { createTab } from "./tabGenerator.js";
import { sortFunction } from "./sortFunction.js";
import { fetchData } from "./fetchData";

function app() {
  createTab(fetchData());

  let i = 0;

  setInterval(() => {
    const resulOfSort = sortFunction(document.querySelectorAll("[data-id]"), i);
    i++;
    if (i === 8) {
      i = 0;
    }
    document.querySelectorAll("[data-id]").forEach((element) => {
      element.remove();
    });
    document.querySelector("table").append(...resulOfSort);
  }, 2000);
}

app();
