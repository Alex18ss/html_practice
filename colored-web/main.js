
text.style.color = localStorage.getItem('txtColor') || '#000000'
document.body.style.backgroundColor = localStorage.getItem('bgColor') || '#ffffff'
text.style.fontSize = localStorage.getItem('txtSize') + 'px' || '16px'

forText.value = localStorage.getItem('txtColor') || '#000000'
forBody.value = localStorage.getItem('bgColor') || '#ffffff'
forTextSize.value = localStorage.getItem('txtSize') || '16'

forText.oninput = function () {
    text.style.color = forText.value
}

forBody.oninput = function () {
    document.body.style.backgroundColor = forBody.value
}

forTextSize.oninput = function () {
    if(+forTextSize.value > 172 || +forTextSize.value < 10) {
        text.style.fontSize = '16px'
    }
    else{
        text.style.fontSize = forTextSize.value + 'px'
    }

}

forText.onchange = function () {
    localStorage.setItem('txtColor', forText.value)
}

forBody.onchange = function () {
    localStorage.setItem('bgColor', forBody.value)
}

forTextSize.onchange = function () {
    localStorage.setItem('txtSize', forTextSize.value)
}
