/**
 *  use cc.SpriteBatchNode to reduce multiple sprite render draw calls to one
 *  1 all sprites should use the texutre from one same sheet
 *  2 the batchNode should refer the same sheet as well
 * 
 *  Reducing draw call in such way is automatic for native platforms. SpriteBatchNode is not needed.
 */
import { res } from "./resource";

export default class SpriteBatchLayer extends cc.Layer {
  spriteBatch: cc.SpriteBatchNode = null;

  constructor() {
    super();
    const size = cc.winSize;

    const sprite1 = new cc.Sprite(res.Sprite_Sheet, cc.rect(438, 93, 67, 94));
    sprite1.attr({
      x: size.width / 2,
      y: size.height / 1.5
    });
    const sprite2 = new cc.Sprite(res.Sprite_Sheet, cc.rect(73, 0, 72, 94));
    sprite2.attr({
      x: size.width / 2,
      y: size.height / 2
    });
    const sprite3 = new cc.Sprite(res.Sprite_Sheet, cc.rect(219, 0, 72, 97));
    sprite3.attr({
      x: size.width / 2,
      y: size.height / 3
    });
    const sprite4 = new cc.Sprite(res.Sprite_Sheet, cc.rect(365, 0, 72, 97));
    sprite4.attr({
      x: size.width / 2,
      y: size.height / 5
    });
    this.spriteBatch = new cc.SpriteBatchNode(res.Sprite_Sheet);
    this.spriteBatch.addChild(sprite1, 0);
    this.spriteBatch.addChild(sprite2, 0);
    this.spriteBatch.addChild(sprite3, 0);
    this.spriteBatch.addChild(sprite4, 0);
    this.addChild(this.spriteBatch);
  }
}
