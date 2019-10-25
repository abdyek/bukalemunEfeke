let redValue = 128
let greenValue = 128
let blueValue = 128

let redBool = false // if these ara true, the function increases them color else the function reduces it
let greenBool = false
let blueBool = false

function getBools() {
    redBool = tryYourChance(redValue)
    greenBool = tryYourChance(greenValue)
    blueBool = tryYourChance(blueValue)
}

function tryYourChance(value) {
    if(value<=0) {
        return true
    } else if(value>=255) {
        return false
    } else {
        return (Math.round(Math.random()))? true: false
    }
}

function apply(value, bool) {
    if(bool) {
        return value + 1
    } else {
        return value - 1
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
    let color = "#" + getHex(redValue) + getHex(greenValue) + getHex(blueValue)
    //console.log(color)
    document.body.style.backgroundColor = color
}

function efeke() {
    getBools()
    redValue = apply(redValue, redBool)
    greenValue = apply(greenValue, greenBool)
    blueValue = apply(blueValue, blueBool)
    setColor()
}

setInterval(function(){
    efeke()
}, 100)

