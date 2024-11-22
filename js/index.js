
var quotes = [
    { body: `“Everyone is a moon, and has a dark side which he never shows to anybody.”`, author: `Mark Twain` },
    { body: `“When you light a candle, you also cast a shadow.”`, author: `Ursula Guin` },
    { body: `“What hurts you, blesses you. Darkness is your candle.”`, author: `Rumi` },
    { body: `“I do not speak as I think, I do not think as I should, and so it all goes on in helpless darkness.”`, author: `Franz Kafka` },
    { body: `“Darkness does not leave us easily as we would hope.”`, author: `Margaret Stohl` },
    { body: `“The Russian soul is a dark place.”`, author: `Fyodor Dostoyevsky` },
    { body: `“To fight evil, you have to understand the dark.”`, author: `Nalini Singh` },
    { body: `“Darkness is my destiny.”`, author: `Hafsah Faizal` },
    { body: `“All I know is a door into the dark”`, author: `Seamus Heaney` },
    { body: `“Fear can only grow in darkness. Once you face fear with light, you win.”`, author: `Steve Maraboli` }
];

var currentQuote = ``;

function getRandomNum() {
    var newQuote;

    do {
        newQuote = Math.floor(Math.random() * 10)
    } while (newQuote == currentQuote);
    currentQuote = newQuote;
}

function getQuote() {
    getRandomNum();
    document.getElementById("quote").classList.replace("d-none", "d-block");
    document.getElementById(`quote-body`).innerHTML = quotes[currentQuote].body;
    document.getElementById(`quote-author`).innerHTML = quotes[currentQuote].author;
    changeName()
}

function changeName() {
    document.getElementById(`wise`).innerHTML = `HIT MORE`;
}

var button = document.getElementById("wise");

button.addEventListener("click", () => {
    button.classList.toggle("flip");
});



/*
I'll separate the next section and disregard responsiveness for now. and ugly images.
Instead, I’ll explore different methods to achieve my goal, focusing on utilizing newly learned concepts such as recursion, eventListener, and classList, among others. also the sizes may be mobile and tablets and desktop....
*/

var previewEl = document.getElementById("preview");
var previewTextEl = document.getElementById("preview__text");
var previewAuthorEl = document.getElementById("preview__author");
var regenerateBtnEl = document.getElementById("regenerate");
var changeSizeEl = document.getElementById("size-changers");


regenerateBtnEl.addEventListener("click", onGenerate);
changeSizeEl.addEventListener("click", onSizeChange);

var uniqueNumber = 0;

function generateNewUniqueNumber() {
    var newNumber = Math.floor(Math.random() * 10);
    if (uniqueNumber === newNumber) {
        generateNewUniqueNumber();
    } else {
        uniqueNumber = newNumber;
    }
}

function updatePreview() {
    var quote = quotes[uniqueNumber];
    previewTextEl.textContent = quote.body
    previewAuthorEl.textContent = quote.author;
}

function onGenerate() {
    document.getElementById("preview").classList.replace("d-none", "d-block");
    generateNewUniqueNumber();
    updatePreview();
}

function changePreviewSize(width, height) {
    previewEl.style.width = `${width}px`;
    previewEl.style.height = `${height}px`;
    previewEl.style.backgroundImage = `url('https://loremflickr.com/${width}/${height}/nature')`;
    previewTextEl.style.fontSize = `${width / 20}px`;
    previewAuthorEl.style.fontSize = `${width / 30}px`;
}

function onSizeChange(event) {
    document.getElementById("preview").classList.replace("d-none", "d-flex");
    onGenerate()
    var target = event.target;
    var width = target.getAttribute('data-width')
    var height = target.getAttribute('data-height')
    changePreviewSize(width, height)
}
