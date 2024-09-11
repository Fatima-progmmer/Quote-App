
let Quotes = {
    science: [

        '"Science is the poetry of reality."',

        ' "The good thing about science is that its true, whether or not you believe in it."',

        ' "Science is a way of thinking much more than it is a body of knowledge."',

        ' "The important thing is not to stop questioning. Curiosity has its own reason for existence." ',

        '"Science is not a finished product, but a continuous process; not a set of beliefs, but a way of thinking." '

    ],
    inspiration: [
        '"Believe you can and you are halfway there."',

        '"The only way to do great work is to love what you do."',

        ' "Success is not final, failure is not fatal: It is the courage to continue that counts."',

        ' "Dont watch the clock; do what it does.Keep going." ',

        ' "You miss 100% of the shots you dont take." '

    ]
};

let currentCategory = "science";
let currentQuoteIndex = 0;
let darkMode = false;
let fontSize = 16;

document.getElementById("category").addEventListener("change", function () {
    currentCategory = this.value;
    currentQuoteIndex = 0;
    displayQuote();
});

document.getElementById("random").addEventListener("click", function () {
    currentQuoteIndex = Math.floor(Math.random() * Quotes[currentCategory].length);
    displayQuote();
});

document.getElementById("mode-button").addEventListener("click", function () {
    darkMode = !darkMode;
    document.body.classList.toggle("dark");
});



document.getElementById("increase-font").addEventListener("click", function () {
    if (fontSize >= 27) {
        alert("You can't increase the more  font size");
    } else {
        fontSize++;
        document.getElementById("quote").style.fontSize = fontSize + "px";
    }
});

document.getElementById("decrease-font").addEventListener("click", function () {
    fontSize--;
    document.getElementById("quote").style.fontSize = fontSize + "px";
});

document.getElementById("prev").addEventListener("click", function () {
    currentQuoteIndex = (currentQuoteIndex - 1 + Quotes[currentCategory].length) % Quotes[currentCategory].length;
    displayQuote();
});

document.getElementById("next").addEventListener("click", function () {
    currentQuoteIndex = (currentQuoteIndex + 1) % Quotes[currentCategory].length;
    displayQuote();
});

function displayQuote() {
    document.getElementById("quote").innerText = Quotes[currentCategory][currentQuoteIndex];
}

displayQuote();