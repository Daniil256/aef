const text = document.querySelector('.text')
const display = document.querySelector('.display')
const btn_num = document.querySelectorAll('.num')
const btn = document.querySelectorAll('.btn')
const dot = document.querySelector('.dot')

const btn_plus = document.querySelector('.plus')
const btn_minus = document.querySelector('.minus')
const btn_multiplication = document.querySelector('.multiplication')
const btn_division = document.querySelector('.division')

const btn_equal = document.querySelector('.equal')
const btn_clear = document.querySelector('.clear')
const btn_backspace = document.querySelector('.backspace')

let ar = []
let operator = ''
let result = 0
let x = ''
let symbol = []

let width_text_default = Number(window.getComputedStyle(text).width.replace(/[a-z]/g, ""))
let fz = 15


document.querySelector('body').addEventListener('click', function () {
    console.log('ar', ar);
    console.log('result', result);
    console.log('x', x);
    console.log('operator', operator);
    console.log("======================");
    let width_text = Number(window.getComputedStyle(text).width.replace(/[a-z]/g, ""))
    let width_display = Number(window.getComputedStyle(display).width.replace(/[a-z]/g, ""))
    // console.log(width_display - width_text);
    // console.log(width_display);
    // console.log(width_text);
    if (width_display - width_text < 30) {
        text.style.fontSize = fz + 'vmin'
        if (fz > 4) fz -= 1
        width_text_default = width_text
        return
    }
    if (width_text_default - width_text > 0) {
        text.style.fontSize = fz + 'vmin'
        if (fz < 15) fz += 1
        return
    }
})
btn_minus.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1]) {
        ar.push(Number(x))
        x = ''
        if (operator == '-') result -= ar[ar.length - 1]
        if (operator == '+') result += ar[ar.length - 1]
        if (operator == '*') result *= ar[ar.length - 1]
        if (operator == '/') result /= ar[ar.length - 1]
        if (operator == '') result = ar[ar.length - 1]
        text.innerHTML = result + '-'
        operator = '-'
    }
    if (text.innerHTML.length == 0) {
        text.innerHTML += '-'
        x += '-'
    }
})
btn_plus.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1]) {
        ar.push(Number(x))
        x = ''
        if (operator == '-') result -= ar[ar.length - 1]
        if (operator == '+') result += ar[ar.length - 1]
        if (operator == '*') result *= ar[ar.length - 1]
        if (operator == '/') result /= ar[ar.length - 1]
        if (operator == '') result = ar[ar.length - 1]
        text.innerHTML = result + '+'
        operator = '+'
    }
})
btn_equal.addEventListener('click', function () {
    ar.push(Number(x))
    if (operator == '+') result += ar[ar.length - 1]
    if (operator == '*') result *= ar[ar.length - 1]
    if (operator == '-') result -= ar[ar.length - 1]
    if (operator == '/') result /= ar[ar.length - 1]
    text.innerHTML = result
    //x = 0
})



btn_division.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1]) {
        ar.push(Number(x))
        x = ''
        if (operator == '-') result -= ar[ar.length - 1]
        if (operator == '+') result += ar[ar.length - 1]
        if (operator == '*') result *= ar[ar.length - 1]
        if (operator == '/') result /= ar[ar.length - 1]
        if (operator == '') result = ar[ar.length - 1]
        text.innerHTML = result
        text.innerHTML += '/'
        operator = '/'
    }
})
btn_multiplication.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1]) {
        ar.push(Number(x))
        x = ''
        if (operator == '-') result -= ar[ar.length - 1]
        if (operator == '+') result += ar[ar.length - 1]
        if (operator == '*') result *= ar[ar.length - 1]
        if (operator == '/') result /= ar[ar.length - 1]
        if (operator == '') result = ar[ar.length - 1]
        text.innerHTML = result
        text.innerHTML += '*'
        operator = '*'
    }
})
for (let i = 0; i < btn_num.length; i++) {
    btn_num[i].addEventListener('click', function () {
        if (text.innerHTML == '0') text.innerHTML = ''
        text.innerHTML += btn_num[i].innerHTML
        x += btn_num[i].innerHTML
    })
}
dot.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1]) {
        text.innerHTML += dot.innerHTML
        x += dot.innerHTML
    }
})
btn_clear.addEventListener('click', function () {
    text.innerHTML = '0'
    result = 0
    ar = []
    operator = ''
    x = ''
    text.style.fontSize = '15vmin'

})
btn_backspace.addEventListener('click', function () {
    symbol = text.innerHTML.split('')
    symbol = symbol.slice(0, symbol.length - 1)
    text.innerHTML = symbol.join('')
    if (text.innerHTML == '') text.innerHTML = '0'
    console.log('symbol', symbol);
})


//функция для решения больших выражений
// btn_equal.addEventListener('click', function () {
//     ar = text.innerHTML.match(/\d+/g)
//     if (ar && ar.length > 1) {
//         for (let i = 0; i < ar.length; i++) {
//             result += Number(ar[i])
//         }
//         text.innerHTML = result
//         console.log(ar)
//         console.log(result)
//     }
// })