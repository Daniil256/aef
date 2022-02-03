const text = document.querySelector('.text')
const display = document.querySelector('.display')
const btn_num = document.querySelectorAll('.num')
const btn = document.querySelectorAll('.btn')
const func = document.querySelectorAll('.func')
const dot = document.querySelector('.dot')

const btn_plus = document.querySelector('.plus')
const btn_minus = document.querySelector('.minus')
const btn_multiplication = document.querySelector('.multiplication')
const btn_division = document.querySelector('.division')

const btn_equal = document.querySelector('.equal')
const btn_clear = document.querySelector('.clear')
const btn_backspace = document.querySelector('.backspace')

let operator = ''
let x = ''
let y = ''
let symbol = []

let width_text_default = Number(window.getComputedStyle(text).width.replace(/[a-z]/g, ""))
let fz = 70
let width_text
let width_display
function operation() {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && text.innerHTML != '0') {
        x = Number(x)
        if (y == 0) y = x
        if (operator == '-') y -= x
        if (operator == '+') y += x
        if (operator == '*') y *= x
        if (operator == '/') y /= x
        if (operator != '/' && operator != '*' && operator != '+' && operator != '-' && operator != '') display.innerHTML = 'Произошла ошибка'
        x = ''
        operator = ''
    }
}

//уменьшение размера шрифта, когда число не влазит
document.querySelector('body').addEventListener('click', function () {
    console.log(' x', x, '\n', 'y', y, '\n', 'operator', operator, '\n', "======================");
    width_text = Number(window.getComputedStyle(text).width.replace(/[a-z]/g, ""))
    width_display = Number(window.getComputedStyle(display).width.replace(/[a-z]/g, ""))
    // console.log('display', width_display, '\n', 'text', width_text, '\n,', '======================');
    if (width_display < width_text) {
        fz = (90 * fz) / 100
        text.style.fontSize = fz + 'px'
    }
})
//вычитание
btn_minus.addEventListener('click', function () {
    operation()
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && text.innerHTML != '0') {
        text.innerHTML = y + '-'
        operator = '-'
    } else {
        text.innerHTML = '-'
        x = '-'
    }
})
//прибавление
btn_plus.addEventListener('click', function () {
    operation()
    text.innerHTML = y + '+'
    operator = '+'
})
//умножение
btn_multiplication.addEventListener('click', function () {
    operation()
    text.innerHTML = y + '*'
    operator = '*'
})
//деление
btn_division.addEventListener('click', function () {
    operation()
    text.innerHTML = y + '/'
    operator = '/'
})
//равно
btn_equal.addEventListener('click', function () {
    operation()
    text.innerHTML = y
})
//кнопки цифр
for (let i = 0; i < btn_num.length; i++) {
    btn_num[i].addEventListener('click', function () {
        if (text.innerHTML == '0') text.innerHTML = ''
        text.innerHTML += btn_num[i].innerHTML
        x += btn_num[i].innerHTML
    })
}
//точка
dot.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1]) {
        text.innerHTML += dot.innerHTML
        x += dot.innerHTML
    }
})
//кнопка очистить все
btn_clear.addEventListener('click', function () {
    text.innerHTML = '0'
    operator = ''
    x = ''
    y = ''
    text.style.fontSize = '70px'
})
//кнопка удалить один символ
btn_backspace.addEventListener('click', function () {
    symbol = text.innerHTML.split('')
    symbol = symbol.slice(0, symbol.length - 1)
    text.innerHTML = symbol.join('')
    if (text.innerHTML == '') text.innerHTML = '0'

    if (x != '') {
        symbol = x.split('')
        symbol = symbol.slice(0, symbol.length - 1)
        x = symbol.join('')
        return
    }
    if (operator != '') {
        operator = ''
        return
    }

    if (y != '') {
        symbol = String(y).split('')
        symbol = symbol.slice(0, symbol.length - 1)
        y = symbol.join('')
    }
})