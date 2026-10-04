const button1 = document.querySelector("#minus");
const button2 = document.querySelector("#plus");
const display = document.querySelector("#num");

let zahl = 0;


function render() {
  display.innerText = zahl;
  const url = new URL(window.location);
  url.searchParams.set("counter", zahl);
  history.pushState({ counter: zahl }, "", url);
}


button1.addEventListener("click", () => { zahl--; render(); });
button2.addEventListener("click", () => { zahl++; render(); });

const params = new URLSearchParams(window.location.search);
const initial = parseInt(params.get("counter"), 10);
zahl = isNaN(initial) ? 0 : initial;
display.innerText = zahl;

history.replaceState({ counter: zahl }, "");

window.addEventListener("popstate", (e) => {
  if (e.state && typeof e.state.counter === "number") {
    zahl = e.state.counter;
    display.innerText = zahl;
  }
});