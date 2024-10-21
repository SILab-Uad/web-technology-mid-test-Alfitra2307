<<<<<<< HEAD
export const generatePassword = (length, options) => {
=======
// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
>>>>>>> af2f235b910f7a696a6447bedb8150aaf0b70c26
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";
<<<<<<< HEAD

    let characterSet = '';
    if (options.includeUppercase) characterSet += uppercase;
    if (options.includeLowercase) characterSet += lowercase;
    if (options.includeNumbers) characterSet += numbers;
    if (options.includeSpecialChars) characterSet += specialChars;

    if (characterSet === '') {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
};
=======

    // TODO: Create a variable for the character set based on selected options
     
    let charSet = "";
    if (options.includeUppercase) charSet += uppercase;
    if (options.includeLowercase) charSet += lowercase;
    if (options.includeNumbers) charSet += numbers;
    if (options.includeSpecialChars) charSet += specialChars;   

    if (charSet.length === 0) {
        return "No character set selected, please select at least one option.";
    }
    // Build the character set based on selected options
    
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return pass;
};
    
 // Use value instead of textContent
 document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };
    
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').value = password;
});

// BONUS: Implement the copy to clipboard functionality


>>>>>>> af2f235b910f7a696a6447bedb8150aaf0b70c26
