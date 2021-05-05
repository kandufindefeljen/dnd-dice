input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    skift_dice += -1
    if (skift_dice < 0) {
        skift_dice = liste.length - 1
    }
    basic.showString("" + (liste[skift_dice]))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (liste[skift_dice]))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    skift_dice += 1
    if (skift_dice > liste.length - 1) {
        skift_dice = 0
    }
    basic.showString("" + (liste[skift_dice]))
})
input.onGesture(Gesture.Shake, function () {
    værdi = [3, 6, 8, 10, 12, 20, 100]
    basic.showString("" + (randint(1, værdi[skift_dice])))
})
let værdi: number[] = []
let liste: string[] = []
let skift_dice = 0
skift_dice = 3
liste = ["d3", "d6", "d8", "d10", "d12", "d20", "d100"]
basic.showString("DND")
