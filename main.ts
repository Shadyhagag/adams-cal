let change_by_1 = 0
let change_by_2 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showNumber(change_by_1 * change_by_2)
})
input.onButtonPressed(Button.A, function () {
    change_by_1 += 1
    basic.showNumber(change_by_1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        `)
    basic.showNumber(change_by_1 / change_by_2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showNumber(change_by_1 + change_by_2)
})
input.onButtonPressed(Button.B, function () {
    change_by_2 += 1
    basic.showNumber(change_by_2)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showNumber(change_by_1 - change_by_2)
})
