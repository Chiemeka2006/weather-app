let input = document.querySelector(".search");
let labelLocation = document.querySelector(".placeholder");
let form = document.querySelector("form");
console.log(input);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(input.value);
    if (input.innerHTML.length > 0) {
        labelLocation.style.opacity = "0";
    }
});
