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
let stp = false

let width_text_default = Number(window.getComputedStyle(text).width.replace(/[a-z]/g, ""))
let width_text
let width_display
function operation() {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && text.innerHTML != '0') {
        x = Number(x)
        if ((y == 0 || operator == '') && (x != '' || x != 0)) y = x
        if (operator == '-') y -= x
        if (operator == '+') y += x
        if (operator == '*') y *= x
        if (operator == '/') y /= x
        if (operator != '/' && operator != '*' && operator != '+' && operator != '-' && operator != '') display.innerHTML = 'Произошла ошибка'
        x = ''
        operator = ''
        text.innerHTML = y
        fontSize()
    }
}
//отображение в консоли информации
document.querySelector('body').addEventListener('click', function () {
    width_text = Number(window.getComputedStyle(text).width.replace(/[a-z]/g, ""))
    width_display = Number(window.getComputedStyle(display).width.replace(/[a-z]/g, ""))
    // console.log(' x', x, '\n', 'y', y, '\n', 'operator', operator, '\n', "======================");
    console.log('display', width_display + '\n' + 'text', width_text + '\n' + (width_display - width_text) + '\n' + '======================');
})

//уменьшение размера шрифта, когда число не влазит
function fontSize() {
    width_text = Number(window.getComputedStyle(text).width.replace(/[a-z]/g, ""))
    width_display = Number(window.getComputedStyle(display).width.replace(/[a-z]/g, ""))
    if (width_display - width_text < -200) {
        text.style.fontSize = '30px'
        return
    }
    text.style.fontSize = (width_display - width_text) + 200 + '%'
}

//вычитание
btn_minus.addEventListener('click', function () {
    operation()
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && text.innerHTML != '0') {
        text.innerHTML += '-'
        operator = '-'
    } else {
        text.innerHTML = '-'
        x = '-'
    }
})
//прибавление
btn_plus.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && text.innerHTML != '0') {
        operation()
        text.innerHTML += '+'
        operator = '+'
    }
})
//умножение
btn_multiplication.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && text.innerHTML != '0') {
        operation()
        text.innerHTML += '*'
        operator = '*'
    }
})
//деление
btn_division.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && text.innerHTML != '0') {
        operation()
        text.innerHTML += '/'
        operator = '/'
    }
})
//равно
btn_equal.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && text.innerHTML != '0') {
        if (x == 0 && y != 0) operator = ''
        operation()
    }
})
//кнопки цифр
for (let i = 0; i < btn_num.length; i++) {
    btn_num[i].addEventListener('click', function () {
        fontSize()
        if (text.innerHTML == '0') text.innerHTML = ''
        text.innerHTML += btn_num[i].innerHTML
        x += btn_num[i].innerHTML
    })
}
//точка
dot.addEventListener('click', function () {
    if (Number(text.innerHTML[text.innerHTML.length - 1]) == text.innerHTML[text.innerHTML.length - 1] && (text.innerHTML.match(/\./g, '') == null || operator != '' && text.innerHTML.match(/\./g, '').length == 1)) {
        if (y != 0 && operator == '') x = Number(text.innerHTML)
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

    if (x != '' && stp == false) {
        symbol = String(x).split('')
        symbol = symbol.slice(0, symbol.length - 1)
        x = symbol.join('')
        x = Number(x)
        if (x == 0) stp = true
        return
    }
    if (operator != '') {
        operator = ''
        return
    }
    if (y != '') {
        x = y
        symbol = String(y).split('')
        symbol = symbol.slice(0, symbol.length - 1)
        y = symbol.join('')
        y = Number(y)
    }
})



// окно графиков
document.querySelector('.btn.graph').addEventListener('click', function () {
    document.querySelector('.app.complex_expressions').style.zIndex = '1'
    document.querySelector('.app.calc').style.zIndex = '1'
    document.querySelector('.app.graph').style.zIndex = '2'
})
document.querySelector('.btn.complex_expressions').addEventListener('click', function () {
    document.querySelector('.app.complex_expressions').style.zIndex = '2'
    document.querySelector('.app.calc').style.zIndex = '1'
    document.querySelector('.app.graph').style.zIndex = '1'
})
for (let i = 0; i < document.querySelectorAll('.btn.calc').length; i++) {
    document.querySelectorAll('.btn.calc')[i].addEventListener('click', function () {
        document.querySelector('.app.complex_expressions').style.zIndex = '1'
        document.querySelector('.app.calc').style.zIndex = '2'
        document.querySelector('.app.graph').style.zIndex = '1'
    })
}
const svg = document.querySelector('svg')
for (let i = 0; i < 400; i += 15) {
    svg.innerHTML +=
        `<path class="line" d="M0 ${i}, l 0 0, 300 0" />
         <path class="line" d="M${i} 0, l 0 0, 0 500" />`
}
document.querySelector('svg').innerHTML +=
    `<polyline class="function_graph id="path" />
     <polyline class="function_graph id="path" />`
console.time();
let coordPos = ''
let coordNeg = ''
let startCoordX = 150 + 0
let startCoordY = 315 - 0
for (let i = 0.01; i < 50; i += 0.01) {
    // coordPos += `${Math.trunc(i * 15 + startCoordX)} ${-Math.trunc(i * i * 15 - startCoordY)}, `
    // coordNeg += `${-Math.trunc(i * 15 - startCoordX)} ${-Math.trunc(i * i * 15 - startCoordY)}, `
    coordPos += `${Math.trunc(i * 15 + startCoordX)} ${-Math.trunc(1 / i * 15 - startCoordY)}, `
    coordNeg += `${-Math.trunc(i * 15 - startCoordX)} ${Math.trunc(1 / i * 15 + startCoordY)}, `
}
document.querySelectorAll('.function_graph')[0].setAttribute('points', coordPos)
document.querySelectorAll('.function_graph')[1].setAttribute('points', coordNeg)
console.timeEnd();
