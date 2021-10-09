let umidità = 0
radio.setGroup(33)
basic.forever(function () {
    umidità = pins.analogReadPin(AnalogPin.P1)
    radio.sendNumber(umidità)
    if (umidità > 1005) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            `)
    } else if (umidità > 950) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
