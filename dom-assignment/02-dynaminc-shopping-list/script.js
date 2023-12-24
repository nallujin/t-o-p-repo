const ul = document.querySelector("ul");
const input = document.getElementById("item");
const btn = document.querySelector("button");
let storedValue;

btn.addEventListener("click", () => {
    storedValue = input.value;
    input.value = "";
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
    newSpan.textContent = storedValue;
    newBtn.textContent = "Delete";
    newBtn.addEventListener("click", () => {
        newLi.remove();
    });
    ul.appendChild(newLi);
    input.focus();
});
