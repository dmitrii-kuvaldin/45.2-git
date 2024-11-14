console.log('hello, Ruslana!')
console.log(100 + 900)

document.querySelector('#minus').onclick = (event) => {
        event.preventDefault(); 
        const inputField = document.querySelector('input[type="number"]');
        inputField.stepDown(); 
    };

    document.querySelector('#pow').onclick = (event) => {
        event.preventDefault();
        const inputField = document.querySelector('input[type="number"]');
        inputField.stepUp(); 
    };