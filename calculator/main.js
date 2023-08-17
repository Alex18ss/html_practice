let string = document.querySelector('.result')
let btn_zero = document.querySelector('.zero')
let btn_one = document.querySelector('.one')
let btn_two = document.querySelector('.two')
let btn_three = document.querySelector('.three')
let btn_four = document.querySelector('.four')
let btn_five = document.querySelector('.five')
let btn_six = document.querySelector('.six')
let btn_seven = document.querySelector('.seven')
let btn_eight = document.querySelector('.eight')
let btn_nine = document.querySelector('.nine')
let btn_ac = document.querySelector('.ac')
let btn_divide = document.querySelector('.divide')
let btn_procent = document.querySelector('.procent')
let btn_multiply = document.querySelector('.multiply')
let btn_minus = document.querySelector('.minus')
let btn_plus = document.querySelector('.plus')
let btn_ravno = document.querySelector('.equal')
let btn_dot = document.querySelector('.dot')


let firstNum = 0
let secodnNum = 0

let op = ''

function print_num (num) {
    if (string.textContent == '0') 
    {
        string.textContent = ''
        string.textContent += num
    }
    else if (string.textContent != '0') 
    {
        string.textContent += num
    }
}

function chooseOperations() {
    if (op == '+') {
        return firstNum + secodnNum
    }
    if (op == '-') {
        return firstNum - secodnNum
    }
    if (op == '/') {
        if (secodnNum == 0){
            return 'null'
        }
        else if (secodnNum != 0){
            return firstNum / secodnNum
        }
        
    }
    if (op == '*') {
        return firstNum * secodnNum
    }
    if (op == '%') {
        if (secodnNum == 0){
            return 'null'
        }
        else if (secodnNum != 0){
            return firstNum * (secodnNum / 100)
        }
    }
}



function giveOperators(type) {
    op = type
    firstNum = +string.textContent
    string.textContent = '0'
}

btn_zero.onclick = function() {
    print_num('0')
}
btn_one.onclick = function() {
    print_num('1')

}
btn_two.onclick = function() {
    print_num('2')
}
btn_three.onclick = function() {
    print_num('3')
}
btn_four.onclick = function() {
    print_num('4')
}
btn_five.onclick = function() {
    print_num('5')
}
btn_six.onclick = function() {
    print_num('6')
}
btn_seven.onclick = function() {
    print_num('7')
}  
btn_eight.onclick = function() {
    print_num('8')
}
btn_nine.onclick = function() {
    print_num('9')
}
btn_ac.onclick = function() {
    string.textContent = '0'
    firstNum = 0
    secodnNum = 0
}

btn_dot.onclick = function() {
    if (string.textContent.includes('.') == true) {
        return
    }
    else if (string.textContent.includes('.') == false) {
        string.textContent += '.'
    }    
}


btn_plus.onclick = function() {
    giveOperators('+')
}

btn_minus.onclick = function() {
    giveOperators('-')
}
btn_divide.onclick = function() {
    giveOperators('/')
}

btn_multiply.onclick = function() {
    giveOperators('*')
}

btn_procent.onclick = function() {
    giveOperators('%')
}

btn_ravno.onclick = function() {
    secodnNum = +string.textContent
    string.textContent = chooseOperations()
}

