import {res} from './resource'
export default class PListAnimationLayer extends cc.Layer {
    sprite: cc.Sprite = null

    constructor() {
        super()
        const size = cc.winSize
        cc.spriteFrameCache.addSpriteFrames(res.Sprite_Sheet1_P, res.Sprite_Sheet1)
        
        const animFrames = Array.from({length: 11}, (item, _idx) => {
            const i = _idx + 1
            const str = `p1_walk${i < 10 ? '0' + i : i}.png`
            return cc.spriteFrameCache.getSpriteFrame(str)
        })

        this.sprite = new cc.Sprite()
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        })
        this.addChild(this.sprite, 0)

        const animation = new cc.Animation(animFrames, 0.08)
        this.sprite.runAction(cc.animate(animation).repeatForever())
    }
}