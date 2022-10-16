function RightArm () {
    while (loop) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(chosenangle)
            runservo = 1
        } else if (input.buttonIsPressed(Button.A)) {
            adjNum += 10
            chosenangle = adjNum
            basic.showNumber(chosenangle)
        } else if (input.buttonIsPressed(Button.B)) {
            adjNum += -10
            chosenangle = adjNum
            basic.showNumber(chosenangle)
        } else if (adjNum > 180) {
            basic.showIcon(IconNames.Sad)
            basic.showNumber(adjNum)
        } else if (runservo != 0) {
            basic.showNumber(chosenangle)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, chosenangle)
            basic.pause(200)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 0)
        }
    }
    runservo = 0
}
let chosenangle = 0
let adjNum = 0
let runservo = 0
let loop = false
basic.showIcon(IconNames.Happy)
loop = true
runservo = 0
let servoNum = 1
let angle = 0
adjNum = 0
basic.forever(function () {
    RightArm()
})
