enum ActionKind {
    RunningLeft,
    RunningRight,
    Idle,
    IdleLeft,
    IdleRight,
    JumpingLeft,
    JumpingRight,
    CrouchLeft,
    CrouchRight,
    Flying,
    Walking,
    Jumping
}
namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Flier = SpriteKind.create()
}
function initializeAnimations () {
    initializeHeroAnimations()
    initializeCoinAnimation()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function initializeCoinAnimation () {
    coinAnimation = animation.createAnimation(ActionKind.Idle, 200)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 9 9 9 9 f f . . . . 
        . . . . f 9 9 9 9 9 9 f . . . . 
        . . . f 9 9 9 4 4 9 9 9 f . . . 
        . . . f 9 9 9 4 4 9 9 9 f . . . 
        . . . f 9 9 9 4 4 9 9 9 f . . . 
        . . . f 9 9 9 4 4 9 9 9 f . . . 
        . . . . f 9 9 9 9 9 9 f . . . . 
        . . . . f f 9 9 9 9 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f 9 f 9 9 9 f . . . . . 
        . . . f 9 f 9 9 9 9 9 f . . . . 
        . . f 9 f 9 9 9 4 9 9 f . . . . 
        . . f 9 f 9 9 9 4 4 9 9 f . . . 
        . . f 9 f 9 9 9 4 4 9 9 f . . . 
        . . f 9 f 9 9 9 4 9 9 f . . . . 
        . . . f 9 f 9 9 9 9 9 f . . . . 
        . . . . f 9 f 9 9 9 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f 9 f 9 f f . . . . . 
        . . . f f 9 f 9 9 9 f . . . . . 
        . . . f 9 f 9 9 9 9 f f . . . . 
        . . . f 9 f 9 9 4 9 9 f . . . . 
        . . . f 9 f 9 9 4 9 9 f . . . . 
        . . . f 9 f 9 9 9 9 f f . . . . 
        . . . f f 9 f 9 9 9 f . . . . . 
        . . . . f f 9 f 9 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 9 f 9 f f . . . . . 
        . . . . . f 9 f 9 9 f . . . . . 
        . . . . . f 9 f 9 9 f . . . . . 
        . . . . . f 9 f 9 9 f . . . . . 
        . . . . . f 9 f 9 9 f . . . . . 
        . . . . . f 9 f 9 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 9 f 9 f . . . . . 
        . . . . . f 9 9 f 9 f . . . . . 
        . . . . . f 9 9 f 9 f . . . . . 
        . . . . . f 9 9 f 9 f . . . . . 
        . . . . . f 9 9 f 9 f . . . . . 
        . . . . . f f 9 f 9 f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 9 f 9 f f . . . . 
        . . . . . f 9 9 9 f 9 f f . . . 
        . . . . f f 9 9 9 9 f 9 f . . . 
        . . . . f 9 9 4 9 9 f 9 f . . . 
        . . . . f 9 9 4 9 9 f 9 f . . . 
        . . . . f f 9 9 9 9 f 9 f . . . 
        . . . . . f 9 9 9 f 9 f f . . . 
        . . . . . f f 9 f 9 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . f 9 9 9 f 9 f f . . . 
        . . . . f 9 9 9 9 9 f 9 f . . . 
        . . . . f 9 9 4 9 9 9 f 9 f . . 
        . . . f 9 9 4 4 9 9 9 f 9 f . . 
        . . . f 9 9 4 4 9 9 9 f 9 f . . 
        . . . . f 9 9 4 9 9 9 f 9 f . . 
        . . . . f 9 9 9 9 9 f 9 f . . . 
        . . . . . f 9 9 9 f 9 f . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    otherSprite.y += -3
    info.changeScoreBy(3)
    music.baDing.play()
})
function attemptJump () {
    // else if: either fell off a ledge, or double jumping
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -4 * pixelsToMeters
    } else if (canDoubleJump) {
        doubleJumpSpeed = -3 * pixelsToMeters
        // Good double jump
        if (hero.vy >= -40) {
            doubleJumpSpeed = -4.5 * pixelsToMeters
            hero.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        hero.vy = doubleJumpSpeed
        canDoubleJump = false
    }
}
function animateIdle () {
    mainIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 100)
    animation.attachAnimation(hero, mainIdleLeft)
    mainIdleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f d d d d d d d d d 1 1 d f . 
        . f d d a d d d d a d d 1 d f . 
        . f d d f d d d d f d d d 1 f . 
        . f d d a d d d d a d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f e c c c c c c c c e b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f e e e e e e e e e b f . . 
        . . . f e e b f f e e b f . . . 
        . . . f e e b f f e e b f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    mainIdleRight = animation.createAnimation(ActionKind.IdleRight, 100)
    animation.attachAnimation(hero, mainIdleRight)
    mainIdleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f d 1 1 d d d d d d d d d f . 
        . f d 1 d d a d d d d a d d f . 
        . f 1 d d d f d d d d f d d f . 
        . . f d d d a d d d d a d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b e c c c c c c c c e f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b e e e e e e e e e f . . 
        . . . f b e e f f b e e f . . . 
        . . . f b e e f f b e e f . . . 
        . . . . f f f . . f f f . . . . 
        `)
}
function setLevelTileMap (level: number) {
    clearGame()
    if (level == 0) {
        tiles.setTilemap(tilemap`level`)
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level_1`)
    }
    initializeLevel(level)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function animateRun () {
    mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 100)
    animation.attachAnimation(hero, mainRunLeft)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . f 1 1 1 1 1 1 1 1 1 f . . . . 
        . f d d d d 1 d d 1 1 f . . . . 
        . f d d a d d 1 d 1 1 f . . . . 
        . f d d f d d d 1 1 1 f . . . . 
        . f d d a d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c e e c c b f . . . . 
        . . f c c d d d c c b f . . . . 
        . . f b f f d d f f f f . . . . 
        . . f e e e e e e e b f . . . . 
        . . . f e e e e b f f . . . . . 
        . . . f e e e e b f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . f 1 1 1 1 1 1 1 1 1 f . . . . 
        . f d d d d 1 d d 1 1 f . . . . 
        . f d d a d d 1 d 1 1 f . . . . 
        . f d d f d d d 1 1 1 f . . . . 
        . f d d a d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c c e e c b f . . . . 
        . . f c c c c d d c b f . . . . 
        . . f b f f d d d f f f f . . . 
        . . f e e e e e e e e b f f . . 
        . . . f e e b f f e e e f f . . 
        . . . . f f f . f f f f f . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . f 1 1 1 1 1 1 1 1 1 f . . . . 
        . f d d d d 1 d d 1 1 f . . . . 
        . f d d a d d 1 d 1 1 f . . . . 
        . f d d f d d d 1 1 1 f . . . . 
        . f d d a d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c e e c c b f . . . . 
        . . f c c d d d c c b f . . . . 
        . . f b f f d d f f f f . . . . 
        . . f e e e e e e e b f . . . . 
        . . . f e e e e b f f . . . . . 
        . . . f e e e e b f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . f 1 1 1 1 1 1 1 1 1 f . . . . 
        . f d d d d 1 d d 1 1 f . . . . 
        . f d d a d d 1 d 1 1 f . . . . 
        . f d d f d d d 1 1 1 f . . . . 
        . f d d a d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c e e c c c c b f . . . . 
        . f d d d b c c c c b f . . . . 
        f f f d d f f f f f f f . . . . 
        f f f e e e e e e e b f . . . . 
        . f e e b f e e b f f . . . . . 
        . f f f f . f f f . . . . . . . 
        `)
    mainRunRight = animation.createAnimation(ActionKind.RunningRight, 100)
    animation.attachAnimation(hero, mainRunRight)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f 1 1 1 1 1 1 1 f . . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 d d 1 d d d d f . 
        . . . . f 1 1 d 1 d d a d d f . 
        . . . . f 1 1 1 d d d f d d f . 
        . . . . f d d d d d d a d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c e e c c c f . . 
        . . . . f b c c d d d c c f . . 
        . . . . f f f f d d f f b f . . 
        . . . . f b e e e e e e e f . . 
        . . . . . f f b e e e e f . . . 
        . . . . . . f b e e e e f . . . 
        . . . . . . . f f f f f . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f 1 1 1 1 1 1 1 f . . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 d d 1 d d d d f . 
        . . . . f 1 1 d 1 d d a d d f . 
        . . . . f 1 1 1 d d d f d d f . 
        . . . . f d d d d d d a d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c e e c c c c f . . 
        . . . . f b c d d c c c c f . . 
        . . . f f f f d d d f f b f . . 
        . . f f b e e e e e e e e f . . 
        . . f f e e e f f b e e f . . . 
        . . . f f f f . . f f f . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f 1 1 1 1 1 1 1 f . . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 d d 1 d d d d f . 
        . . . . f 1 1 d 1 d d a d d f . 
        . . . . f 1 1 1 d d d f d d f . 
        . . . . f d d d d d d a d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c e e c c c f . . 
        . . . . f b c c d d d c c f . . 
        . . . . f f f f d d f f b f . . 
        . . . . f b e e e e e e e f . . 
        . . . . . f f b e e e e f . . . 
        . . . . . . f b e e e e f . . . 
        . . . . . . . f f f f f . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f 1 1 1 1 1 1 1 f . . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 d d 1 d d d d f . 
        . . . . f 1 1 d 1 d d a d d f . 
        . . . . f 1 1 1 d d d f d d f . 
        . . . . f d d d d d d a d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c c c e e c f . . 
        . . . . f b c c c c b d d d f . 
        . . . . f f f f f f f d d f f f 
        . . . . f b e e e e e e e f f f 
        . . . . . f f b e e f b e e f . 
        . . . . . . . f f f . f f f . . 
        `)
}
function animateJumps () {
    // Because there isn't currently an easy way to say "play this animation a single time
    // and stop at the end", this just adds a bunch of the same frame at the end to accomplish
    // the same behavior
    mainJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 100)
    animation.attachAnimation(hero, mainJumpLeft)
    mainJumpLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f d d d d d d d d d 1 1 d f . 
        . f d d a d d d d a d d 1 d f . 
        . f d d f d d d d f d d d 1 f . 
        . f d d a d d d d a d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f e c c c c c c c c e b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f e e e e e e e e e b f . . 
        . . . f e e b f f e e b f . . . 
        . . . f e e b f f e e b f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    mainJumpLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f d d d d d d d d d 1 1 d f . 
        . f d d a d d d d a d d 1 d f . 
        . f d d f d d d d f d d d 1 f . 
        . f d d a d d d d a d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f e c c c c c c c c e b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f e e e e e e e e e b f . . 
        . . . f e e b f f e e b f . . . 
        . . . . f f f . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    for (let index = 0; index < 30; index++) {
        mainJumpLeft.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f d d d d d d d d d 1 1 d f . 
            . f d d a d d d d a d d 1 d f . 
            . f d d f d d d d f d d d 1 f . 
            . f d d a d d d d a d d d f . . 
            . f d d d d d d d d d d d f f . 
            . d e b c c c c c c c c b e d . 
            . d e c c c c c c c c c c e d . 
            . f f f f f b b f f f f f f f . 
            . . f e e e e e e e e e b f . . 
            . . . f e e b f f e e b f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    mainJumpRight = animation.createAnimation(ActionKind.JumpingRight, 100)
    animation.attachAnimation(hero, mainJumpRight)
    mainJumpRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f d 1 1 d d d d d d d d d f . 
        . f d 1 d d a d d d d a d d f . 
        . f 1 d d d f d d d d f d d f . 
        . . f d d d a d d d d a d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b e c c c c c c c c e f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b e e e e e e e e e f . . 
        . . . f b e e f f b e e f . . . 
        . . . f b e e f f b e e f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    mainJumpRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f d 1 1 d d d d d d d d d f . 
        . f d 1 d d a d d d d a d d f . 
        . f 1 d d d f d d d d f d d f . 
        . . f d d d a d d d d a d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b e c c c c c c c c e f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b e e e e e e e e e f . . 
        . . . f b e e f f b e e f . . . 
        . . . . f f f . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    for (let index = 0; index < 30; index++) {
        mainJumpRight.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f d 1 1 d d d d d d d d d f . 
            . f d 1 d d a d d d d a d d f . 
            . f 1 d d d f d d d d f d d f . 
            . . f d d d a d d d d a d d f . 
            . f f d d d d d d d d d d d f . 
            . d e b c c c c c c c c b e d . 
            . d e c c c c c c c c c c e d . 
            . f f f f f f f b b f f f f f . 
            . . f b e e e e e e e e e f . . 
            . . . f b e e f f b e e f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
function animateCrouch () {
    mainCrouchLeft = animation.createAnimation(ActionKind.CrouchLeft, 100)
    animation.attachAnimation(hero, mainCrouchLeft)
    mainCrouchLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f d d d d d d d d d 1 1 d f . 
        . f d d a d d d d a d d 1 d f . 
        . f d d f d d d d f d d d 1 f . 
        . f d d a d d d d a d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f e c c c c c c c c e b f . . 
        . f d c c c c c c c c c d d f . 
        f d d f f f b b f f f f d d f . 
        . f f e e e e e e e e e b f . . 
        . . . f f f f . f f f f f . . . 
        `)
    mainCrouchRight = animation.createAnimation(ActionKind.CrouchRight, 100)
    animation.attachAnimation(hero, mainCrouchRight)
    mainCrouchRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f d 1 1 d d d d d d d d d f . 
        . f d 1 d d a d d d d a d d f . 
        . f 1 d d d f d d d d f d d f . 
        . . f d d d a d d d d a d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b e c c c c c c c c e f . 
        . f d d c c c c c c c c c d f . 
        . f d d f f f f b b f f f d d f 
        . . f b e e e e e e e e e f f . 
        . . . f f f f f . f f f f . . . 
        `)
}
function clearGame () {
    for (let value of sprites.allOfKind(SpriteKind.Bumper)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Coin)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Goal)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Flier)) {
        value4.destroy()
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(hero.isHittingTile(CollisionDirection.Bottom))) {
        hero.vy += 80
    }
})
function showInstruction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
    music.baDing.play()
    info.changeScoreBy(1)
}
function initializeHeroAnimations () {
    animateRun()
    animateIdle()
    animateCrouch()
    animateJumps()
}
function createPlayer (player2: Sprite) {
    player2.ay = gravity
    scene.cameraFollowSprite(player2)
    controller.moveSprite(player2, 100, 0)
    player2.z = 5
    info.setLife(3)
    info.setScore(0)
}
function initializeLevel (level: number) {
    effects.blizzard.startScreenEffect()
    playerStartLocation = tiles.getTilesByType(assets.tile`tile6`)[0]
    tiles.placeOnTile(hero, playerStartLocation)
    tiles.setTileAt(playerStartLocation, assets.tile`tile0`)
    spawnGoals()
}
function hasNextLevel () {
    return currentLevel != levelCount
}
function spawnGoals () {
    for (let value7 of tiles.getTilesByType(assets.tile`tile5`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 9 9 9 9 f f . . . . 
            . . . . f 9 9 9 9 9 9 f . . . . 
            . . . f 9 9 9 4 4 9 9 9 f . . . 
            . . . f 9 9 9 4 4 9 9 9 f . . . 
            . . . f 9 9 9 4 4 9 9 9 f . . . 
            . . . f 9 9 9 4 4 9 9 9 f . . . 
            . . . . f 9 9 9 9 9 9 f . . . . 
            . . . . f f 9 9 9 9 f f . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        tiles.placeOnTile(coin, value7)
        animation.attachAnimation(coin, coinAnimation)
        animation.setAction(coin, ActionKind.Idle)
        tiles.setTileAt(value7, assets.tile`tile0`)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    currentLevel += 1
    if (hasNextLevel()) {
        setLevelTileMap(currentLevel)
    } else {
        game.over(true, effects.slash)
    }
})
let heroFacingLeft = false
let coin: Sprite = null
let playerStartLocation: tiles.Location = null
let mainCrouchRight: animation.Animation = null
let mainCrouchLeft: animation.Animation = null
let mainJumpRight: animation.Animation = null
let mainJumpLeft: animation.Animation = null
let mainRunRight: animation.Animation = null
let mainRunLeft: animation.Animation = null
let mainIdleRight: animation.Animation = null
let mainIdleLeft: animation.Animation = null
let doubleJumpSpeed = 0
let canDoubleJump = false
let coinAnimation: animation.Animation = null
let currentLevel = 0
let levelCount = 0
let gravity = 0
let pixelsToMeters = 0
let hero: Sprite = null
hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f d 1 1 d d d d d d d d d f . 
    . f d 1 d d a d d d d a d d f . 
    . f 1 d d d f d d d d f d d f . 
    . . f d d d a d d d d a d d f . 
    . . f d d d d d d d d d d d f . 
    . . f b e c c c c c c c c e f . 
    . . f d d d c c c c c c d d f . 
    . . f d d f f f b b f f f d f . 
    . . f b e e e e e e e e e f . . 
    . . . f b e e f f b e e f . . . 
    . . . f b e e f f b e e f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
// how long to pause between each contact with a
// single enemy
let invincibilityPeriod = 600
pixelsToMeters = 30
gravity = 9.81 * pixelsToMeters
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
initializeAnimations()
createPlayer(hero)
levelCount = 8
currentLevel = 0
setLevelTileMap(currentLevel)
// Reset double jump when standing on wall
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true
    }
})
// bumper movement
game.onUpdate(function () {
    for (let value9 of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value9.isHittingTile(CollisionDirection.Left)) {
            value9.vx = Math.randomRange(30, 60)
        } else if (value9.isHittingTile(CollisionDirection.Right)) {
            value9.vx = Math.randomRange(-60, -30)
        }
    }
})
// set up hero animations
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true
    } else if (hero.vx > 0) {
        heroFacingLeft = false
    }
    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0
    }
    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.CrouchLeft)
        } else {
            animation.setAction(hero, ActionKind.CrouchRight)
        }
    } else if (hero.vy < 20 && !(hero.isHittingTile(CollisionDirection.Bottom))) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.JumpingLeft)
        } else {
            animation.setAction(hero, ActionKind.JumpingRight)
        }
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.RunningLeft)
    } else if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.RunningRight)
    } else {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.IdleLeft)
        } else {
            animation.setAction(hero, ActionKind.IdleRight)
        }
    }
})
