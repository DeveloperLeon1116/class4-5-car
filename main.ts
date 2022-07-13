radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        powerbrick.MotorRunDual(0, 0)
    }
    if (1 == receivedNumber) {
        powerbrick.MotorRunDual(255, 255)
    }
    if (2 == receivedNumber) {
        powerbrick.MotorRunDual(-255, -255)
    }
    if (3 == receivedNumber) {
        powerbrick.MotorRunDual(0, 255)
    }
    if (4 == receivedNumber) {
        powerbrick.MotorRunDual(255, 0)
    }
    if (5 == receivedNumber) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (6 == receivedNumber) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (7 == receivedNumber) {
        basic.showString("A")
    }
    if (8 == receivedNumber) {
        basic.showString("B")
    }
})
radio.setGroup(255)
basic.showIcon(IconNames.Heart)
basic.pause(5000)
basic.clearScreen()
