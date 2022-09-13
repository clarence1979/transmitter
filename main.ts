radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    basic.showString("x")
    basic.showNumber(input.acceleration(Dimension.X))
    basic.showString("y")
    basic.showNumber(input.acceleration(Dimension.Y))
    radio.sendValue("y", input.acceleration(Dimension.Y))
})
