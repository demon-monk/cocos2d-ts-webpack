import { res } from "./resource";

export default class SpriteAnimationLayer extends cc.Layer {
  sprite: cc.Sprite = null;

  constructor() {
    super();
    const size = cc.winSize;
    const walk01 = cc.rect(0, 0, 72, 97);
    const walk02 = cc.rect(73, 0, 72, 97);
    const walk03 = cc.rect(146, 0, 72, 97);
    const walk04 = cc.rect(0, 98, 72, 97);
    const walk05 = cc.rect(73, 98, 72, 97);
    const walk06 = cc.rect(146, 98, 72, 97);
    const walk07 = cc.rect(219, 0, 72, 97);
    const walk08 = cc.rect(292, 0, 72, 97);
    const walk09 = cc.rect(219, 98, 72, 97);
    const walk10 = cc.rect(365, 0, 72, 97);
    const walk11 = cc.rect(292, 98, 72, 97);

    const frameDatas = [
      walk01,
      walk02,
      walk03,
      walk04,
      walk05,
      walk06,
      walk07,
      walk08,
      walk09,
      walk10,
      walk11
    ];
    const texture = cc.textureCache.addImage(res.Sprite_Sheet);
    const animFrames = frameDatas.map(frameData => {
      const spriteFrame = new cc.SpriteFrame(texture, frameData);
      const animFrame = new cc.AnimationFrame();
      animFrame.initWithSpriteFrame(spriteFrame, 1, null);
      return animFrame
    });

    this.sprite = new cc.Sprite();
    this.sprite.attr({
      x: size.width / 2,
      y: size.height / 2
    });
    this.addChild(this.sprite, 0);
    
    const animation = cc.Animation.create(animFrames, 0.08);
    const animate = cc.Animate.create(animation);
    this.sprite.runAction(animate.repeatForever());
  }
}
