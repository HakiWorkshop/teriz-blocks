input.onButtonPressed(Button.A, function () {
    tabell[0].change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (_true == 1) {
        spawn(randint(0, 5), 0)
    }
})
function spawn (x: number, y: number) {
    tabell = [game.createSprite(x, y)]
}
input.onButtonPressed(Button.B, function () {
    tabell[0].change(LedSpriteProperty.X, 1)
})
let tabell: game.LedSprite[] = []
let _true = 0
for (let index = 0; index < 1; index++) {
    if (true) {
        spawn(randint(0, 5), 0)
    }
}
_true = 1
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    if (input.isGesture(Gesture.ScreenDown)) {
        basic.clearScreen()
    }
    if (input.isGesture(Gesture.TiltRight)) {
        tabell[0].change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        tabell[0].change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        tabell[0].change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        tabell[0].change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . . . .
            `)
    }
})
