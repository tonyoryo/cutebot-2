basic.showIcon(IconNames.Heart)
let velocidad = 0
basic.forever(function () {
    if (velocidad == 0) {
        velocidad = 0
    }
    cuteBot.motors(velocidad, velocidad)
    velocidad += 1
})
