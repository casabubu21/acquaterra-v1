let umidità = 0
basic.forever(function () {
    umidità = pins.analogReadPin(AnalogPin.P1)
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
})
