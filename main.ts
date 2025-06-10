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
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
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
    true
    )
})
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
    door_2 = sprites.create(img`
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
    door_3 = sprites.create(img`
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.sensor, function (sprite, otherSprite) {
    story.showPlayerChoices("Door 1", "door 2", "door 3")
    if (story.checkLastAnswer("door 1")) {
    	
    } else if (story.checkLastAnswer("door 2")) {
    	
    } else if (story.checkLastAnswer("door 3")) {
    	
    }
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
    story.spriteMoveToLocation(character, 130, 90, 100)
    pause(500)
    story.spriteSayText(character, "ouch...")
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
        . . . 3 3 . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 3 3 3 3 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.sensor)
    sensorss.setPosition(100, 90)
}
let sensorss: Sprite = null
let door_3: Sprite = null
let door_2: Sprite = null
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
