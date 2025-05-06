const burgerBtn = document.querySelector('#open_burger_button');
const burgerWindow = document.querySelector('.burger_window');

burgerBtn.addEventListener('click', () => {
    if (window.innerWidth <= 750) {
        burgerWindow.classList.toggle('active');
    }
});

// Для кнопки закрытия
document.querySelector('#close_button_burger').addEventListener('click', () => {
    burgerWindow.classList.remove('active');
});

try {
    const send_button = document.querySelector("#send")
send_button.addEventListener('click', send_form)
function send_form() {
    send_form = true
    event.preventDefault(); 

    if( document.querySelector("#worker-select").value == 'select') {
        alert("Выберете специалиста!")
        send_form = false
    }

    if (document.querySelectorAll('.day.active').length != 1 || document.querySelectorAll(".time_li.active").length != 1) {
        alert("Выберете дату и время")
        send_form = false
    }

    const form_inputs = document.querySelectorAll("#user_data")

    inputs_fills = true
    for (let i=0; i < form_inputs.length; i++) {
        if (form_inputs[i].value == '') {
            inputs_fills = false
        }
    }
    if (!inputs_fills) {
        send_form = false
        alert("Заполните все поля с данными")
    }
    
    if(send_form) {
        alert("Вы записаны на прием!")
        document.querySelector('.sign_up_window').submit()
    }
}

const signup_buttons = document.querySelectorAll(".signup_btn") 
const sign_up_window = document.querySelector(".sign_up_window")
const sign_up_wrapper = document.querySelector(".sign_up_wrapper")

function open_signup_form() {
    sign_up_window.classList.add('active');
    sign_up_wrapper.classList.add('active');
    document.querySelector('.header').style.marginTop = '0px'
}

// Открытие формы
for(let i = 0; i < signup_buttons.length; i++) {
    signup_buttons[i].addEventListener('click', open_signup_form);
}

// Предотвращаем закрытие при клике на саму форму
sign_up_window.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Закрытие при клике на фон
sign_up_wrapper.addEventListener('click', function() {
    sign_up_window.classList.remove('active');
    sign_up_wrapper.classList.remove('active');
    document.querySelector('.header').style.marginTop = '30px'
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sign_up_wrapper.classList.contains('active')) {
        sign_up_window.classList.remove('active');
        sign_up_wrapper.classList.remove('active');
    }
});


}
catch (err) {
}

