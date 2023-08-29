// sanity check
console.log("Hello world!");

const keys = document.querySelectorAll(".keys");
console.log(keys);

keys.forEach((key) => {
  key.addEventListener("click", () => {
    console.log(key.innerText);
  });
});
