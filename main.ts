controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.spray, randint(100, 600))
})
let mySprite: Sprite = null
scene.setBackgroundColor(8)
game.splash("!!LET THE GAMES BEGIN!!")
mySprite = sprites.create(assets.image`HeroStartImage`, SpriteKind.Player)
