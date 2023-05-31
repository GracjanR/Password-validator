const input = document.querySelector('#inputPassword2')
const contents = document.querySelector('.contents');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10


// Show message
const showMsg = () => {
    if(input.value.length> minValue && input.value.match(letters) && input.value.match(numbers) && input.value.match(special) ){
        contents.innerHTML = 'You have a very good password! 💪';
        contents.style.color = 'lime';
    }else if(input.value.length> minValue && input.value.match(letters) && input.value.match(numbers)){
        contents.innerHTML = 'You have a good password! 😊';
        contents.style.color = 'gold';
    }else{
        contents.innerHTML = 'You have a weak password! 🤔';
        contents.style.color = 'black'
    }
}

//Check password
const checkPassword = () => {
    if(input.value !== ''){
        showMsg()
    }else{
        contents.innerHTML = 'You have not provided a password...';
        contents.style.color = '';
    }
}

input.addEventListener('keyup', checkPassword)