enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const object = SpriteKind.create()
    export const opendoor = SpriteKind.create()
    export const sensor = SpriteKind.create()
}
function chosing_door_function () {
    story.showPlayerChoices("Open door", "Leave it alone")
    door = sprites.create(img`
        .eeeeeeeeeeeeee.
        effffffffffffffe
        eccccccffffffffe
        eccccceffffffffe
        ecccbbeffffffffe
        eccbbdeffffffffe
        ecbdddeffffffffe
        ecbdddeffffffffe
        eceeeeeffffffffe
        ecbbbeeffffffffe
        ebeeeeeffffffffe
        ebeee55ffffffffe
        ebeee55ffffffffe
        eceeeeeffffffffe
        ecbdddefffffffee
        ecbdddefffffffee
        eccbddefffffffee
        eccbddefffffffee
        eccbddefffffffee
        ecbbddefffffffee
        ecbccdefffffffee
        ecbbccefffffffee
        ecccccefffffffee
        eeeecceeeeeeeeee
        `, SpriteKind.opendoor)
    sprites.destroyAllSpritesOfKind(SpriteKind.object)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    character,
    [img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d e e f f f . . 
        . . . f e 4 e d d 4 f . . . 
        . . . f 3 3 e d d e f . . . 
        . . f f 6 6 f e e f f f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f c d d f 1 4 d 4 f f . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e d d 4 . . 
        . . . f 3 3 3 3 e d d e . . 
        . . f f 6 6 6 6 f e e f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 255, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    animation.stopAnimation(animation.AnimationTypes.All, character)
    character.x += -30
    story.spriteSayText(character, "WHAATS THIs?")
    story.showPlayerChoices("Open door", "Leave it alone")
    door = sprites.create(img`
        .eeeeeeeeeeeeee.
        effffffffffffffe
        eccccccffffffffe
        eccccceffffffffe
        ecccbbeffffffffe
        eccbbdeffffffffe
        ecbdddeffffffffe
        ecbdddeffffffffe
        eceeeeeffffffffe
        ecbbbeeffffffffe
        ebeeeeeffffffffe
        ebeee55ffffffffe
        ebeee55ffffffffe
        eceeeeeffffffffe
        ecbdddefffffffee
        ecbdddefffffffee
        eccbddefffffffee
        eccbddefffffffee
        eccbddefffffffee
        ecbbddefffffffee
        ecbccdefffffffee
        ecbbccefffffffee
        ecccccefffffffee
        eeeecceeeeeeeeee
        `, SpriteKind.opendoor)
    sprites.destroyAllSpritesOfKind(SpriteKind.object)
    door.setPosition(140, 90)
    if (story.checkLastAnswer("Leave it alone")) {
        music.rest(music.beat(BeatFraction.Half))
        story.startCutscene(function () {
            animation.runMovementAnimation(
            character,
            animation.animationPresets(animation.flyToCenter),
            2000,
            false
            )
            story.spriteSayText(character, "AHHHHHHHHHHH!!!!!!!!")
            character.setVelocity(50, 20)
        })
    } else {
        story.startCutscene(function () {
            music.rest(music.beat(BeatFraction.Half))
            story.spriteSayText(sprite, ".....", 15)
            story.spriteSayText(sprite, "im gonna go in there", 15)
            story.spriteMoveToLocation(sprite, 140, 90, 50)
        })
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    character,
    [img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . f f 4 d 4 1 f d d c f . . 
        . . f f f 4 d d d d f . . . 
        . . 4 d d e 4 4 4 e f . . . 
        . . e d d e 3 3 3 3 f . . . 
        . . f e e f 6 6 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 c f f . 
        . f f 4 4 f b f 4 4 f f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f e e d d d f . . . 
        . . . f 4 d d e 4 e f . . . 
        . . . f e d d e 3 3 f . . . 
        . . f f f e e f 6 6 f f . . 
        . . f f f f f f f f f f . . 
        . . . f f . . . f f f . . . 
        `,img`
        . f f f . f f f f f . . . . 
        f f f f f c c c c f f . . . 
        f f f f b c c c c c c f . . 
        f f f c 3 c c c c c c f . . 
        . f 3 3 c c c c c c c c f . 
        . f f f c c c c c 4 c c f . 
        . f f f f c c c 4 4 e f f . 
        . f f 4 4 f b f 4 4 e f f . 
        . . f 4 d 4 1 f d d f f . . 
        . . f f f 4 d d d d f . . . 
        . . . f e e 4 4 4 e f . . . 
        . . . 4 d d e 3 3 3 f . . . 
        . . . e d d e 3 3 3 f . . . 
        . . . f e e f 6 6 6 f . . . 
        . . . . f f f f f f . . . . 
        . . . . . f f f . . . . . . 
        `],
    500,
    false
    )
})
function door_3_option () {
    sprites.destroyAllSpritesOfKind(SpriteKind.object)
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
        11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
        11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
        111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
        11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
        11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
        1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
        1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
        111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
        111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
        11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
        11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
        11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
        1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
        1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
        1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
        ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
        dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
        dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
        ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
        ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
        ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
        dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
        9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
        999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
        9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
        99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
        999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
        999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
        9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
        9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
        9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
        9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
        9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
        9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
        9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
        9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
        9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
        9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
        9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
        9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
        9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
        9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
        9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
        9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
        9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
        9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
        9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
        6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    mySprite = sprites.create(img`
        .........................e2ee22e22e.........................
        .....................2222eeee22e22e2222.....................
        .................2222e222e2ee22eeee22ee2222.................
        .............ee22e222eeeee2ee22e22eeeee22ee22e..............
        .............ee22e222eeeee2ee22e22eeeee22ee22e..............
        ..........eeeee22e222e222e2ee22e22e22ee22ee22eeeee..........
        ......2222e22ee22eeeee222e2ee22e22e22eeeeee22e222e2222......
        ...222eeeee22ee22e222e222eeee22eeee22ee22ee22e222eeeee22....
        4cc222e222e22eeeee222e222e2ee22e22e22ee22eeeee222e222e22ccc4
        4cc222e222e22eeeee222e222e2ee22e22e22ee22eeeee222e222e22ccc4
        6c6eeee222e22ee22e222e222e2ee22e22e22ee22ee22e222e222eee66c6
        466222e222eeeee22e222eeeee2ee22e22eeeee22ee22eeeee222e226664
        466222e222e22ee22eeeee222e2ee22e22e22eeeeee22e222e222e226664
        4cc222eeeee22ee22e222e222eeee22eeee22ee22ee22e222eeeee22ccc4
        4cc222eeeee22ee22e222e222eeee22eeee22ee22ee22e222eeeee22ccc4
        6c6222e222e22eeeee222e222e2ee22e22e22ee22eeeee222e222e2266c6
        466eeee222e22ee22e222e222e2ee22e22e22ee22ee22e222e222eee6664
        466222e222eeeee22e222e222e2ee22e22e22ee22ee22eeeee222e226664
        466222e222eeeee22e222e222e2ee22e22e22ee22ee22eeeee222e226664
        4cc222e222e22ee22e222eeeee2ee22e22eeeee22ee22e222e222e22ccc4
        6c6222eeeee22ee22eeeee222eeee22eeee22eeeeee22e222eeeee2266c6
        466222e222e22eeeee222e222e2ee22e22e22ee22eeeee222e222e226664
        466eeee222e22ee22e222e222e2ee22e22e22ee22ee22e222e222eee6664
        466eeee222e22ee22e222e222e2ee22e22e22ee22ee22e222e222eee6664
        4cc222e222eeeee22e222e222e2ee22e22e22ee22ee22eeeee222e22ccc4
        6c6222e222e22ee22e222e222eeee22eeee22ee22ee22e222e222e2266c6
        466222eeeee22ee22e222eeeecc66666ccceeee22ee22e222eeeee226664
        466222e222e22ee22eeeeccc666666666666ccceeee22e222e222e226664
        466222e222e22ee22eeeeccc666666666666ccceeee22e222e222e226664
        4cceeee222e22eeeeccc666666cccccccc666666ccceee222e222eeeccc4
        6c6222e222eeeccc666666ccc6444444446cc6666666cceeee222e2266c6
        466222e222cc666666ccc644444444444444466cc6666666cc222e226664
        466222e222cc666666ccc644444444444444466cc6666666cc222e226664
        466222cc66666cccc64444444444444444444444466ccc66666ccc226664
        4cccc66666ccc66444bbcc666666666666666cccb44446cccc66666cccc4
        cccccccccc66666666ccb444444444444444444bc666666666cccccccccc
        64444444444444446c44444444444444444444444cc64444444444444446
        64444444444444446c44444444444444444444444cc64444444444444446
        66cbb44444444444cb44111111111111111111114bbc44444444444bcc66
        666ccccccccccccccd11666666666666666666661ddccccccccccccc6666
        6666644444444444c1116eeeeeeeeeeeeeeeeee6111c4444444444466666
        666ee22222222ee4c166e4ee44e444e444e44eee611c4e222222222e6666
        666ee22222222ee4c166e4ee44e444e444e44eee611c4e222222222e6666
        666eeeeeeeeeeee4c166e4ee44e444e444e44eee611c4eeeeeeeeeee6666
        666eeddddddddee4c666f4ee4effffffffe44eee666c4eddddddddde6666
        666eedffddffdee4c666f4eeffffffffffff4eee666c4eddffdfffde6666
        666eedffddffdee4c666f4eeffffffffffff4eee666c4eddffdfffde6666
        666eedccddccdee4c666f4eeffffffffffffeeee666c4eddccdcccde6666
        666eeddddddddee4c666f4eeeeeeeeeeeeeeeeee666c4eddddddddde6666
        c66eedffddffdee4c666e4ee44e444e444e44eee666c4eddffdfffde666c
        c66eedccddccdee4c666e4ee44e444e444e44eee666c4eddccdcccde666c
        c66eedccddccdee4c666e4ee44e444e444e44eee666c4eddccdcccde666c
        cc66666666666664c666e4ee44e444e444feeeee666c46666666666666cc
        .c66644444444444c666e4ee44e444e444fffffe666c44444444444666c.
        ..c664eeee4eeee4c666f4ee44e444e444f44ffe666c4eeee4eeee46cc..
        ...cc4eeee4eeee4c666f4ee44e444e444effeee666c4eeee4eeee4c....
        ...cc4eeee4eeee4c666f4ee44e444e444effeee666c4eeee4eeee4c....
        .....64444444444c666f4ee44e444e444e44eee666c44444444446.....
        ......64eeee4444c666f4ee44e444e444e44eee666c4444eee446......
        .......6cccc6666c666e4ee44e444e444e44eee666c6666ccc66.......
        `, SpriteKind.object)
    mySprite.setPosition(136, 73)
    story.printText("you made it home!", 50, 50, 15)
    pause(2000)
    game.gameOver(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.opendoor, function (sprite, otherSprite) {
    door = sprites.create(img`
        .eeeeeeeeeeeeee.
        ebddddddddddddbe
        edddedddeddeddde
        edddddddddddddde
        edddedddedddddde
        eddddddddddeddde
        edddedddedddddde
        ebddddddddddddbe
        ecbbbbbbbbbbbbee
        ecffffffffffffee
        ebeeeeeeeeeeeebe
        ebeeeeeeeeee111e
        fbeeeeeeeeee15df
        feeeeeeeeeee5ddf
        feebbeeeeeebbeef
        feffffffffffffef
        feddddddddddddef
        fededdededdeddef
        feddddddddddddef
        fededdedddddddef
        feddddddeddeddef
        feddddddddddddef
        feffffffffffffef
        ffffffffffffffff
        `, SpriteKind.object)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.opendoor)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    door.setPosition(140, 90)
    door.startEffect(effects.disintegrate, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.object)
    story.cancelAllCutscenes()
    get_outta_here()
})
function doorSetup () {
    door = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . e e e e e e e e . . . . 
        . . e b d d d d d d b e . . . 
        . . e d d d d d d d d e . . . 
        . . e d e d e d e d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e d e d e d e d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e b d d d d d d d e . . . 
        . . e c b b b b b 5 5 1 . . . 
        . . e c f f f f f 4 5 5 . . . 
        . . e b e e e e e 4 4 e . . . 
        . . e b e e e e e e e e . . . 
        . . e b e e e e e e e e . . . 
        . . f b e e e e e e e f . . . 
        . . f e e e e e e e e f . . . 
        . . f e e b b e e e e f . . . 
        . . . e f f f f f f f . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.object)
    story.spriteMoveToLocation(door, 10, 70, 100)
    door_2 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . e e e e e e e e . . . . 
        . . e b d d d d d d b e . . . 
        . . e d d d d d d d d e . . . 
        . . e d e d e d e d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e d e d e d e d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e b d d d d d d d e . . . 
        . . e c b b b b b 5 5 1 . . . 
        . . e c f f f f f 4 5 5 . . . 
        . . e b e e e e e 4 4 e . . . 
        . . e b e e e e e e e e . . . 
        . . e b e e e e e e e e . . . 
        . . f b e e e e e e e f . . . 
        . . f e e e e e e e e f . . . 
        . . f e e b b e e e e f . . . 
        . . . e f f f f f f f . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.object)
    story.spriteMoveToLocation(door_2, 10, door.y - 30, 100)
    door_3 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . e e e e e e e e . . . . 
        . . e b d d d d d d b e . . . 
        . . e d d d d d d d d e . . . 
        . . e d e d e d e d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e d e d e d e d d e . . . 
        . . e d d d d d d d d e . . . 
        . . e b d d d d d d d e . . . 
        . . e c b b b b b 5 5 1 . . . 
        . . e c f f f f f 4 5 5 . . . 
        . . e b e e e e e 4 4 e . . . 
        . . e b e e e e e e e e . . . 
        . . e b e e e e e e e e . . . 
        . . f b e e e e e e e f . . . 
        . . f e e e e e e e e f . . . 
        . . f e e b b e e e e f . . . 
        . . . e f f f f f f f . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.object)
    story.spriteMoveToLocation(door_3, 10, door.y + 30, 100)
}
function door_2_option () {
    sprites.destroyAllSpritesOfKind(SpriteKind.object)
    scene.setBackgroundImage(img`
        8fffffffffffffffffffffffff88fffff88ffff8998889999999989988888989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffffff8fffff88ff9f88889889999999989998888898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffffff8fffff889ff9988888988999989998999888889899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffffff8fff8f8f99ff998888898899988999899988888989999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffff8fff8f8fff998998888889889998899989998898898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffff8fff8f8fffff98888888888888999889998899889888899999699999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffff8ffff88ffffff99888889988888999988999889988988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffff88fff8ffff8ff889988888998898988998899988998899888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffff8fff8f8ff8ff8888988888899889988899889998899989988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffff8ffffff888888ff88888888888889988998889988999889998999888999999999989999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff8ffffff88888fff888888888888889999999888998899988999899988899999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffff8ffffff88888ff88888888888888888898899988899889998899989999889998999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffff8fff88f888888f888888888888888888889889998889988999889998989988999999999999899999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffff8ffff88f8888888888888888888888888888988899888998889988999988999899999999899998999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffff8ffff88888888888888888888888889888888998889988899888998899998889989999999998999969999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff888f88888888888888888888888988888899888999889988899888999888899999999999989999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffff888f888888888888888888888888898888889988899988998889988899998888999999999999899999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffff8fff8888888888888888888888888889888888998889998889988998889999988889999989999998999999999999999999999999999999999999999999999999999999999999999999
        fffffff8fffff8fff88888888888888888888888888888988888899888999888998899888999999889999998999999989999999999999999999999999999999999999999999999999999999999999999
        ffffff8fffff8fff88f888888888888888888888888888898888889988899988899888998899999999999999989999999899999999999999999999999999999999999999999999999999999999999999
        ffffffff8f88fff88ff888888888888888888888888888889888888999889998889988899888999999899999999899999998999989999999999999999999999999999999999999999999999999999999
        fffffff8888ff888ff8888888888888888888888888888888988888899999999888999899988899999988999999998899999999998899999999999999999999999999999999999999999999999999999
        ff8fff888ffff8fff88888888888888888888888888888888888888889999999988999999999888999998899999999988889999999988999999999999999999999999999999999999999999999999999
        fffff888ffff8ff8888888888888888888888888888888888888888889999989998889999988988899999988899999999998899999999999999999999999999999999999999999999999999999999999
        ffff88fffff8ff88888888888888888888888888888888888888888889999888999888999988889999999999888999999998988999999999999999999999999999999999999999999999999999999999
        fff88fff88fff888888888888888888888888888888888888888888888988988899998889999888899999999999889999999998889999999999999999999999999999999999999999999999999999999
        f8888ff88ffff888888888888888888888888888888888888888888888898899888998888999998889999888999998899999999988889899999999999999999999999999899999999999999999999999
        88fff888ffff8888888888888888888888888888888888888888888888889888988898888889999988899988889999988888999999988888999999999899999999999999999999999999999999999999
        8fff88ffff888888888888888888888888888888888888888888888888888988899888988888999998888999888889999888888999999988888898999999888999999999999999999999999999999999
        ff888ffff8888888888888888888888888888888888888888888888888888899888988898888899999988889999888899999888889999999888888899999999998889999999999999999999999999999
        f888ffff88888888888888888888888888888888888888888888888889988888888898888988888999999888899998888899999888899999999888888889999999999988888999999999999888888888
        88ffff8888888888888888888888888888888888888888888888888888998888888889988898888999999998888999998888999999888899999998889999988888999999999899999999998888888888
        8ffff88888888888888888888888888888888888888888888888888888899888888988898899988889999999988988999998889999999988999999999999999999999999999999999999999999999999
        8fff888888888888888888888888888888888888888888888888888888888988888888888999999888999999999988889999998889999999989999989999999999999999999999999999999999999999
        ff88888888888888888888888888888888888888888888888888888888888898888888988999999998889999999999888899999998899999999999999999999999988888889999999999999999999999
        f888888888888888888888888888888888888888888888888888888888888889988888899998899999888899999999998888899999998899999999999999899999999988888888888888888888889999
        6888888888888888888888888888888888888888888888888888888888888888898888888898888999998888999999999998888999999998899999999999999999999999999988888888888888888888
        6888888888888888888888888888888888888888888888888888888888888888888888888888988889999988888899999999988888999999998899999999999999999999999999999999999999999999
        6688888888888888888888888888888888888888888888888888888888888888888888888888899888889999998888999999999988888999999998899999999999999999999999999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888888888889999888899999988888999988999988888999999999999999999999999999899999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888889888888898998888899999988889988889999988999999999999999999999999999999999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888888998888888889998888999999989999888889999999999999888999999998888888888889999999888888899
        66f8888888888888888888888888888888888888888888888888888888888888888888888889988888888999888888999999999999888899999999999988888999999999998899999999888889999999
        66ff888888888888888888888888888888888888888888888888888888888888888888888888899888888889988888889999999999998888899999999999888888899999999999988889888889999999
        66fff88888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888899998889999988888999989999998999999999999999998888888999999999
        666ff88888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888889998888888999988899888889999999999888999999999999888888888889
        666fff8888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888899999899888888999999998888889999999999998888889999999888888888
        666fff6888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888889888999988998889999998888889999999998888888888888888999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888899888888888888888888888999998888888999999888888999999999998888889999999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888889999999888888888999888899888888888888889999999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998899998888888889999989999999999999999999999
        666ff6666f888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999988889999999999999888888888888fff
        666fff66fff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888888888fff668
        6666fffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888fff666666
        66666fffffff888888888f888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888888888888888888888888888fffff6666866
        66666fffffff888888f8f6688888888888888888888888888888888888888888888888888888888888888888888888888888888888888899998888888888888888888888888888888888fff886666666
        666666ffff8666888ffff66f8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff866666666
        666666ffff8666888ffff666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888899999996ff66666866
        666666fff68666888ffff666f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888ff8f666666666
        666666ff668666f888fff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888fffff666666668
        6666666f6666666f8866f666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff8666666668
        66666666666866fff86666668ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff6666666666
        6666cc666668fffff86666666ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff6666666666
        696ccccc6668fff8ff6666666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff8888ffff86666666666
        96cccccc66688fff6f866666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff8ffff88fff866666666666
        96ccccbb66668ff66ff66666668f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff8ffff666666666666
        96ccccbb66668ff666f8666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff6fffffffff6666666666666
        96ccccbb66668ff666f8666666ff8ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f666fffffff66666666666666
        99ccccbbc6666ff6666f666666fff8fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f666ffffff866666666666666
        99ccccbbb6666ff6666f8666666ffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886888888886668fff66666644466666666
        69ccccbbb6666ff666668666666fff6ff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888886666ffff66666444449444466
        666cccbbb66666f666668f66666ff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888ff888888fff888666888888666fff6666666444444444446
        6666cccbb66cccc66666ff666666f666ff88888888888888888888888888888888888888888888888888888888888888888888888888888f6fff888ffff8886668888ff666f666666666442224444446
        666ccccbb6ccccbb6666f6f88666f666ff88888888888888888888888888888888888888888888888888888888888888888888888888886666f888ffffff88666688fff6666666666666442224444446
        66cccccbbcccccbb666666686666f666ff888888888888888888888888888888888888888888888888888888888888888888888888888f666ff888ff88ffff6666f8fff6666666666644442222224466
        6cccbbcbbbbbcccc6666f666666666666ff8888888888888888888888888888888888888888888888888888888888888888888888888f6666f888fff8888ff6666fffff6666666666644222424226666
        6cccbbbbbbbbcccc6668556666666f666ff8888888888888888888888888888888888888888888888888888888888888888888888888f666ff88fff88888886666fff666666666666444244444466666
        6cccbbccbbbccccc66685566666cccf666ff888888888888888888888888888888888888888888888888888888888888888888888888f666ff8fff888888886666886666666666666444244444466666
        6cccccccccccccc66665566666ccccc666fffff886888888888888888888888888888888888888888888888888888888888888888888f666ff8ffff888fff66666866f66666666666644444444466666
        8cccccccccccccc6666566666ccccbbc666fffff666888888888888888888888888888888888888888888888888888888888888ffff6f666f8fffffff8ff666666866f8ff666cbbb666c4b4444466668
        66ccccccccccccc6665566666ccccbbb666fffff6668888f88888888888888888888888888888888888888888888888888888f6666666666fffff8fffff666666666f666666bbbbbc66cbb4444c66668
        666cccccccccccc6665566666cccccbc6666fff866688ffff88888888888888888888888888888888888888888888888888886666666ff666fff6668f66666666666666666bbbcbcc66cbbcccccbc666
        6666ccccccccccc66655666666ccccbb6666ffff66688ffff888888888888888888888888888888888888888888888888888f666666fff666f666668666666666666666686bbbccccc66bbccc5bbbc66
        6666cccccccccc666655666666cccbbb666cccff6668ff68ff888888888888888888888888888888888888888888fffffffff666666ff666f6666666666666666666666666bbccccccccbbccc55bbcc6
        666ccccccccc44446655666666cccbbb6cccccc66668f666ff8888888ff88888888888888888888888888fff88888888888f6666666ff6666666666666f666666666666666cbccccccccccccb55cccc6
        666cccccccc64444444566666cccccbbbbbbbccc6666f666ff8588ff6666888888888ffffffff888888888888fffffffffff6666666f6666666666666668666666666666666cccccccccccccb556ccc6
        666ccccccc64444444445666ccbcccbbbbbbbcccf666f666f6658ff66666f88fff888888888888888888888fffffffffffff6666666f66666666666666666666666666666666ccccccccccccb556cc68
        666ccccccc6644442444446ccbbbcccbbbbbccbb86666666f665ff866666fffffff88888888ffff88ff8888f88888ff88886666666666666666666666866688666699666666666ccccccccccc556cc55
        666ccccccc6644222444444cccbbccccccccccbb666666666655f886666ffffffffffff888888888888ffffff8888888888666656666cccc6666666666668666666996666556666cccccccccc556c556
        666ccccccc64442244244444ccccccccccccccbb666666666655f8f6666fffffffff888888888888888888888888888888866655666cccbbc6666666666666666669996665566666ccccccccc5566556
        666ccccccc64444444244444cccccccccccccccc666666666655f88f6668ffffff8888ffffffffffffffff888888888888ff6655566ccbbbc66ccc66666666666669999995666666cccccccc55665566
        666ccccccc6444444444444ccccccccccccccccc666666666556f88ff666ff88fffffffffffffffffffffff8fffffffffff66655566cccbbc6ccbbcc6666666666699999556666666ccccccc55665566
        666ccccccc64444444422466666cccccccccccccc6666666655666866666ff88ffffffffff88f8888ff8888888ff888ff6666665666cccccbbccbbcc6666666666699999556666666866cccc55c66668
        666ccccccc66444444424566666cccccccccccccc6666666656666666666ff8888ffff555f88f8ffff888888fffffff6666666656666ccccbbcccccc6666666666669999556666666866cccc55c66668
        666cccccc666666444445566666cccccccccccccc66666665566666666666f88666fff5558888888888888888fffff66666666656666cccccccccccc6666666666666696556666666666cccc55c66666
        666ccccccc66666644445566666cccccccccccccc666666655666666666cc6866666ff65f88888fffffffffffffff666666666655666cccccccccccc6666666666666666656666666666cccc55c66666
        666ccccccc66666665565566666cccccccccccccc6666666566666666ccccc866666ff65ffffffffffff888888ff66666666666556666cccccccccc6666666666666666665566666666cccccc5666666
        66cccccccc66666665566666666ccccccc666cc666666666566666666cccbbc6666f66655ffffffffffff8888ff6666666666665666666ccccccccc66ff666666666666665566666666ccccc65566666
        66cccccccc666666665566666666cccccbb666666666666666666666ccccbbbb668f6665568888ffff888fffff666666655666655666666ccccccc66666666666666666666576666666ccccc65566666
        666cccccc6666666665566666666cccccbb666666666666666666666ccccccbb66ff6665566888ffffffffff66666666655666669666996cbbcccc66666422444666666666556666666ccccc55666666
        666cccccc6666666666566666666cccccbb6666666666666666ccccc6ccccccccc6f6665566fffffff8888866666666665566655999999cbbbcccc66644422444466666666556666666cccc655666666
        666cccccc6666666666556666666cccccbbb666665566666666cccbbcccccccccbc666655666888888ffff66666ffffff5566655999999ccbbccc666224222444466666666656666666cccc655666666
        666cccccc66666666665566666666cccccb666666656666666ccccbbccccccccbbbc6665566fffffffffff666ffffffff5566669959996ccccccc644224422444466666666656666666ccccc56666666
        66cccccccc6666666666566666666cccccbb66666655696666ccccbbcccccccccbcc6665566fffffffffff6fffffffff6656666655666cbbbcccc444444424224466666666655666666cccc556666666
        66ccccccc66666666666556666666cccccbb66666655966666cccccbbbccccccccc66665566fffffffffffffffffffff666665665566ccbbbccc6444444224444466666666655666666cccc556666666
        66cccccccc6666666666556666666ccccccb666666559666666ccccbbbccccccccc6666556ff8ffffffffffffffffff6666655665566ccbbcc666444444494444466666666655666666cccc556666666
        666ccccccc6666666666559666666cccccccc66666655444466cccccbccccccc66666665566ffffffffffffffff88866666655665666cbbbccc66644422444444468666666656666996cccc556666666
        666ccccccc6666666666559666666cccccccc666666544444444ccccccccccccf8666666666fffffffffffffffffff66666666666666cbbbccc66664444449444666668666666666999cccc556666bcc
        666ccccccc6666666666556966666ccccccccc666665444442444cccccccccc6f6666666666fffffffffffff88fffff6666666666666cbbcccc6666444444ccccc66686666666666cccccbb556666bbc
        66ccccccc66666666666556666666cccccccccc666654444224444cccccccbbcff666666666ffffffffffffffffffff6666666666666cccccc6666664444cbbbbbc66666666666ccccbbbbbb56b666cc
        66ccccccc66666666666566666666ccccccccccc66665442424444cccccccbbc68666666666fffffffff888888f8ff866666666666666cccc6666666644cbbbbbbcccc6666666cccbbbbbcbb66c666cc
        66ccccccc66666666666566666666ccccccbbbccc6665542422244cccccccbbc66666666666688888ff8888fffffff6666666666666666cccc666666666bbbbcbcccccc666666cccbbbbbccc666c66cc
        66ccccccc66666666665566666666ccccccbbbbcc6666444442244466ccccccc666665666666ffffffffffffffffff666666666666666cccccc6666666bbbccccccccccc66666ccccccccccc666c66cc
        66ccccccc66666666665566666ccccccccccbbbbb6664444444424446cccccbb666665666666fffffffffffffffff6666666666666666cccccc666666bbbbcccccccccccc66666ccccccccccc66666cc
        66ccccccc666666666655666ccccccccccccccbbb6664444444424446cccccbbb666656686666ffffffffffffffff666666666666666cccccccc66666bbbcccccccccccccc66666ccccccccccc6666cc
        66cccccccccccc666665566cccccccccccccccccb666b444444444446cccccbbb6666566f6666f66ffffff88888866666666666666666cccccccc666cbbccccccccccccccc66666cccccccccccc666cc
        66ccccccccccccc6666566ccccccccccccccccccc66ccb444444444666ccccbbb66655666666666666ffffffffff66666666666666666ccccccccccccccccccccccccccccc66666ccccccccccccc66cc
        66ccccccccccccc66665cccccccccccccccccccc666cccc6444444ccc6cccccbb6666566666666f6666fffffffff66666666666666666cccccccccccccccccccccccccccccc666cccccccccccccc66cc
        6cccccccccccccc66666ccccccccccccccccccc6666cccc6644bccccccccccccc8666666666666f66666ffffffff666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccc8
        6cccccccccccccc66666ccccccccccccccccccc666ccccc6666ccccccccccccccf666666666666ff6666ffffffff6666666666666666666ccccccccccccccc6cccccccccccccccccccccccccccccccc8
        `)
    character.setBounceOnWall(true)
    character.setVelocity(10, 10)
    story.spriteSayText(character, "i cant swim!")
    pause(5000)
    game.gameOver(false)
}
function door_1_option () {
    sprites.destroyAllSpritesOfKind(SpriteKind.object)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.sensor, function (sprite, otherSprite) {
    pause(350)
    story.showPlayerChoices("Door 1", "door 2", "door 3")
    if (story.checkLastAnswer("door 1")) {
        door_1_option()
    } else if (story.checkLastAnswer("door 2")) {
        door_2_option()
    } else if (story.checkLastAnswer("door 3")) {
        door_3_option()
    }
    scene.cameraShake(5, 1000)
})
function get_outta_here () {
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffffffffffffffffffffffffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffffffffffffffffffffffffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffffffffffffffffffffffffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffffffffffffffffffffffffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffffffffffffffffffffffffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffffffffffffffffffffffffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffffffffffffffffffffffffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffffffffffffffffffffffffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffffffffffffffffffffffffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffffffffffffffffffffffffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffffffffffffffffffffffccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        fffffffffffffffffffffffffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffffffffffffffffffffffffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffffffffffffffffffffffcfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffffffffffffffffffffffffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ffffffffffffffffffffffffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddd
        fffffffffffffffffffffffffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddd
        fffffffffffffffffffffffffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddd
        ffffffffffffffffffffffffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddd
        fffffffffffffffffffffffffccddddddd111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddd
        ffffffffffffffffffffffffdcbddddddd111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddd
        ffffffffffffffffffffffffcddddddddd1111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddb
        ffffffffffffffffffffccccdddddddddd11111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddb
        ffffffffffffffffffccbbbddddddddddd111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbdddddd
        fffffffffffffffffcdddddddddddddddd11111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbddddd
        ffffffffffffffffcddddddddddddddd111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbdddd
        fffffffffffffffcddddddddddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbdddd
        fffffffffffffffcddddddddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbdddd
        fffffffffffffffbdddddddddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbdddd
        ffffffffffffffcddddddddddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddb
        bbbfffffffffffbddddddddddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddb
        fbbbbfffffffffdddddddddddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbb
        bbffbffffffffbdddddddddddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbb
        bfbfbffffffffbdddddddddddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbb
        bbbbfbfffffffbddddddddddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbb
        cccccbfffffffbddddddddddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbb
        cccccbbfffffbbddddddddddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbb
        cccfccccffffbbdddddddddddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbb
        cccccccccccfbbdddddddddddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbb
        ccccccccccccbdddddddddddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbb
        ccccccccccccbdddddddddddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbb
        ccccccccccccbddddddddddddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbb
        ccccccccccccbdddddddddddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbb
        ccccccccccccbdddddddddddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbb
        ccccccccfcccbdddddddddddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbb
        ccccccccccccbdddddddddddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbb
        cccccccccccbbdddddddddddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbb
        ccccccccccccbdddddddddddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbb
        ccccccccccccbdddddddddddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbb
        cccccccccccccbccdddddddddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddd
        ccccccccccccccbbcdddddddddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbb
        cccccccccccccccbbbdddddddddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbc
        cccccccccccccccbbbdddddddbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbc
        ccccccccccccccccbbcdddbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfd
        ccccccccccccccccbbbdddbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffff
        ccccccccccccccccbbbdddbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffff
        cccccccccccccccccbbbddbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdf
        ccccccccccccccccccbbbdbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfd
        ccccccccccccccccccbbbdbbbbbdddddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffb
        cccccccccccccccccccbbbbbbbbdddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfff
        cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdf
        cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcff
        cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdfffffff
        cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcfffffffff
        cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffff
        cccccccccccccccccccccdddddbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffff
        ccccccccccccccccccccccddddbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffff
        ccccccccccccccccccccccddddbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcfffffffff
        ccccccccccccccccccccccdddddbbbbbbbbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcfff
        ccccccccccccccccccccccddddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcffffffffffff
        cccccccccccccccccccccccddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbfffffffff
        cccccccccccccccccccccccdddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffff
        cccccccccccccccccccccccddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffff
        cccccccccccccccccccccccdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffc
        ccccccccccccccccccccccccddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffff
        ccccccccccccccccccccccccdcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffff
        ccccccccccccccccccccccccdbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcffffffffffffff
        ccccccccccccccccccccccccddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcfffffff
        ccccccccccccccccccccccccdddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffff
        ccccccccccccccccccccccccdddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddffffffffff
        ccccccccccccccccccccccccbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffff
        cccccccccccccccccccccccccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffff
        ccccccccccccccccccccccccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffff
        ccccccccccccccccccccccccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffff
        ccccccccccccccccccccccccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffff
        cccccccccccccccccccccccccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcfffffffffffffff
        cccccccccccccccccccccccccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffff
        ccccccccccccccccffcccccccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffff
        cccccccccccccccfffccccccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffff
        ccccccccccccccccfcccccccccccccccccccccccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbf
        ccccccccccccccccccccccccccccccccccccccccbbcfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbf
        ccccccccccccccccccccccccccccccccccccccccbbcffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdc
        ccccccccccccccccccccccbcccccccccccccccccbbcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffdd
        cccccccccccccccccccbbccccccccccccccccccbbbfcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcfffffff
        cccccccccccccccccccccccccccccccccbbbbbbbbbfffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcffffffffff
        cccccccccccccccccccccccccccccccbbbbbbfffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcfffffffffff
        fccccccccccccccccccccccccccccbbbbffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffff
        fcccfcccccccfffffccccccccccfffffffffffffcffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffff
        bcccccccffffcccccccccccccfffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffff
        bcccccccfcbbbbbbbbfffffccfffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffff
        bcccfccccbbbbfbbfffffffffcccccffffffffcfffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfff
        bcfccfcccbbffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        bccfffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcfffffffffffffffffffffffffffffffffffffffffffff
        fcffccccffffffffffffffffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdff
        ffffffffffffffffffcffffffffffcfffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    character = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    character.startEffect(effects.fire, 500)
    character.setPosition(0, 0)
    story.spriteMoveToLocation(character, 130, 90, 50)
    pause(600)
    story.spriteSayText(character, "ouch...")
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    story.spriteSayText(character, "i need to get home!")
    sensorss = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.sensor)
    sensorss.setPosition(100, 90)
    doorSetup()
    story.spriteMoveToLocation(character, 50, 90, 100)
}
let sensorss: Sprite = null
let door_3: Sprite = null
let door_2: Sprite = null
let mySprite: Sprite = null
let door: Sprite = null
let character: Sprite = null
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
    11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
    11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
    111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
    111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
    ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
    dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
    dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
    ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
    ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
    ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
    dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
    9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
    999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
    9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
    99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
    999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
    999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
    9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
    9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
    9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
    9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
    9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
    9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
    9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
    9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
    9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
    9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
    9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
    9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
    9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
    9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
    9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
    9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
    9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
    9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
    9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
    6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
character = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
door = sprites.create(img`
    .eeeeeeeeeeeeee.
    ebddddddddddddbe
    edddedddeddeddde
    edddddddddddddde
    edddedddedddddde
    eddddddddddeddde
    edddedddedddddde
    ebddddddddddddbe
    ecbbbbbbbbbbbbee
    ecffffffffffffee
    ebeeeeeeeeeeeebe
    ebeeeeeeeeee111e
    fbeeeeeeeeee15df
    feeeeeeeeeee5ddf
    feebbeeeeeebbeef
    feffffffffffffef
    feddddddddddddef
    fededdededdeddef
    feddddddddddddef
    fededdedddddddef
    feddddddeddeddef
    feddddddddddddef
    feffffffffffffef
    ffffffffffffffff
    `, SpriteKind.object)
door.setPosition(140, 90)
character.setPosition(16, 90)
controller.moveSprite(character, 100, 0)
story.printText("go to the door!", 50, 50, 15)
