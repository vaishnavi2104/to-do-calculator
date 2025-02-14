function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        alert("Invalid Input");
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
