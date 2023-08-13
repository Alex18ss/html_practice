let login = document.querySelector('.login')
let register = document.querySelector('.register')
let form_first = document.querySelector('.first')
let form_second = document.querySelector('.second')

login.onclick = function(){
    form_first.classList.remove('show')
    form_first.classList.add('hide')
    form_second.classList.remove('hide')
    form_second.classList.add('show')
    
}

register.onclick = function(){
    form_first.classList.remove('hide')
    form_first.classList.add('show')
    form_second.classList.remove('show')
    form_second.classList.add('hide')
}