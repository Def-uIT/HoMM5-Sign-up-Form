
let nickname = document.getElementById('nickname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let checkbox = document.getElementById('checkbox');
let option = document.getElementById("select");
const button = document.getElementById('submit');

console.log(option.value);

// nickname.value = 'Zhora';
// email.value = 'goblin@gmail.com';
// password.value = 'goblin@gmail.com';
// checkbox.checked = 'checked';

option.addEventListener('change', () => {
    const selectedOption = option.value;
    console.log(selectedOption);
    if (selectedOption === 'elf') {
        alert('гей');
    }
})