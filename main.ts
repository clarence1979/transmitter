radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    basic.showIcon(IconNames.Yes)
    radio.sendValue("y", input.acceleration(Dimension.Y))
})
