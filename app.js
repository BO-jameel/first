const KEY = "counter-value";
const valueEl = document.getElementById("value");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");

let count = Number(localStorage.getItem(KEY) || 0);
render();

incrementBtn.addEventListener("click", () => {
  count += 1;
  persist();
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  persist();
  render();
});

function persist() {
  localStorage.setItem(KEY, String(count));
}

function render() {
  valueEl.textContent = String(count);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
