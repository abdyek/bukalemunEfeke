let states = new Array()
let pointer = 0
let step = 20
let colors = {
    red: {
        value:200
    },
    green: {
        value:200
    },
    blue: {
        value:200
    }
}

function fillStates(len) {
    for(var i=0; i<len; i++)  {
        states.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1)   // 1 || 2 || 3 || 4 || 5 || 6
    }
}

function fetchRandomPointer() {
    pointer = Math.floor(Math.random() * (states.length - 0 + 1))
}

function apply() {
    let state = states[pointer]
    switch(state) {
        case 1:         // red up
            colors.red.value += step
            if(upLimitControl(colors.red.value)) {
                colors.red.value = 255
            }
            break
        case 2:         // red down
            colors.red.value -= step
            if(downLimitControl(colors.red.value)) {
                colors.red.value = 0
            }
            break
        case 3:         // green up
            colors.green.value += step
            if(upLimitControl(colors.green.value)) {
                colors.green.value = 255
            }
            break
        case 4:         // green down
            colors.green.value -= step
            if(downLimitControl(colors.green.value)) {
                colors.green.value = 0
            }
            break
        case 5:         // blue up
            colors.blue.value += step
            if(upLimitControl(colors.blue.value)) {
                colors.blue.value = 255
            }
            break
        case 6:         // blue down
            colors.blue.value -= step
            if(downLimitControl(colors.blue.value)) {
                colors.blue.value = 0
            }
            break
    } 
    pointer++
    if(pointer==states.length-1) {
        pointer = 0
    }
}

function upLimitControl(number) {
    if(number>255) {
        return true
    } else {
        return false
    }
}

function downLimitControl(number) {
    if(number<0) {
        return true
    } else {
        return false
    }
}

function getHex(integerNum) {
    let hex = integerNum.toString(16)
    if(hex.length==1) {
        hex = "0" + hex
    }
    return hex
}

function setColor() {
    let color = "#" + getHex(colors.red.value) + getHex(colors.green.value) + getHex(colors.blue.value)
    document.body.style.backgroundColor = color
    //console.log(colors.red.value + ", " + colors.green.value + ", " + colors.blue.value)
}

fillStates(1000)
function efeke() {
    apply()
    setColor()
}

setInterval(function(){
    efeke()
}, 1000)

setInterval(function() {
    fetchRandomPointer()
}, 10000)


/*
context.beginPath();
context.rect(20, 20, 150, 100);
context.fillStyle = "red";
context.fill();
*/