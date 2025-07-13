const inputBox = document.getElementById("text-input")
const btn = document.getElementById("check-btn")
const word = document.querySelector(".word")
const result = document.getElementById("result")

let y = ` is a palindrome.`
let n = ` is not a palindrome.`

btn.addEventListener("click", () => {
    const inputText = inputBox.value;
    if (inputText === "") {
        alert("Please input a value");
    } else {
        const cleanedText = check(inputText);
        const reversedText = check(reverse(inputText));
        if (cleanedText === reversedText) {
            result.innerHTML = `<span class="word">${inputText}</span>${y}`;
        } else {
            result.innerHTML = `<span class="word">${inputText}</span>${n}`;
        }
    }
});

function check(text) {
    let regex = /[^a-zA-Z0-9]/g;
    const clean = text.replace(regex, ``).toLowerCase();
    return clean;
}
function reverse(text){
    return text.split(``).reverse().join(``);
}