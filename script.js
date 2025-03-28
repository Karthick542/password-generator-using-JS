const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+";
const spaceChar = " ";

function getRandomChar(chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}

function generatePassword() {
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numberCheckbox = document.getElementById("number");
    const symbolsCheckbox = document.getElementById("symbols");
    const excludeDuplicateCheckbox = document.getElementById("excludeDuplicate");
    const spaceCheckbox = document.getElementById("spaces");

    let characters = "";

    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (numberCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;
    if (spaceCheckbox.checked) characters += spaceChar;

    if (characters === "") {
        passwordInput.value = "Select options!";
        return;
    }

    let password = "";
    const length = 12; // Default password length

    while (password.length < length) {
        let char = getRandomChar(characters);
        if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
        password += char;
    }

    passwordInput.value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById("password");
    const copyButton = document.getElementById("copy");

    if (!passwordInput.value || passwordInput.value === "Select options!") return;

    passwordInput.disabled = false; // Enable input for selection
    passwordInput.select();
    document.execCommand("copy"); // Copy text
    passwordInput.disabled = true; // Disable again

    copyButton.textContent = "Copied!";
    
    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 2000);
}
