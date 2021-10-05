function testaPin_analog_3 (_pin: number) {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P3, 100)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P3, 500)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P3, 1023)
    }
    pins.analogWritePin(AnalogPin.P3, 0)
}
function testDigPin_15 () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(100)
}
function testaPin_analog_1 (_pin2: number) {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P1, 100)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P1, 500)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P1, 1023)
    }
    pins.analogWritePin(AnalogPin.P1, 0)
}
function testaPin_analog_4 (_pin3: number) {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P4, 100)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P4, 500)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P4, 1023)
    }
    pins.analogWritePin(AnalogPin.P4, 0)
}
function testaPin_analog_0 (_pin4: number) {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 100)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P0, 500)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P0, 1023)
    }
    pins.analogWritePin(AnalogPin.P0, 0)
}
function testDigPin_14 () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(100)
}
function testDigPin_7 () {
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P7, 0)
    basic.pause(100)
}
function testDigPin_12 () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(100)
}
function testDigPin_6 () {
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(100)
}
function testDigPin_13 () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(100)
}
function testDigPin_9 () {
    pins.digitalWritePin(DigitalPin.P9, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P9, 0)
    basic.pause(100)
}
function testDigPin_8 () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(100)
}
function testaPin_analog_2 (_pin5: number) {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P2, 100)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P2, 500)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P2, 1023)
    }
    pins.analogWritePin(AnalogPin.P2, 0)
}
function testDigPin_16 () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(100)
}
function testaPin_analog_10 (_pin6: number) {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P10, 100)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P10, 500)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P10, 1023)
    }
    pins.analogWritePin(AnalogPin.P10, 0)
}
led.enable(false)
pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P2, 0)
pins.analogWritePin(AnalogPin.P3, 0)
pins.analogWritePin(AnalogPin.P4, 0)
pins.analogWritePin(AnalogPin.P10, 0)
pins.digitalWritePin(DigitalPin.P5, 0)
pins.digitalWritePin(DigitalPin.P6, 0)
pins.digitalWritePin(DigitalPin.P6, 0)
pins.digitalWritePin(DigitalPin.P7, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P11, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
testaPin_analog_0(0)
testaPin_analog_1(1)
testaPin_analog_2(1)
testaPin_analog_3(1)
testaPin_analog_4(1)
testaPin_analog_10(1)
basic.pause(1000)
testDigPin_6()
testDigPin_7()
testDigPin_8()
testDigPin_9()
testDigPin_12()
testDigPin_13()
testDigPin_14()
testDigPin_15()
testDigPin_16()
pins.digitalWritePin(DigitalPin.P5, 1)
pins.digitalWritePin(DigitalPin.P11, 1)
basic.forever(function () {
	
})
