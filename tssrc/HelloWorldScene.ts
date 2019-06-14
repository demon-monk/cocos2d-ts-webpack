import HelloWorldLayer from './HelloWorldLayer'
import SpriteAnimationLayer from './SpriteAnimationLayer'
import PListAnimationLayer from './PListAnimationLayer'
import SpriteBatchLayer from './SpriteBatchLayer'
export class HelloWorldScene extends cc.Scene {
    onEnter() {
        super.onEnter();
        var layer = new SpriteBatchLayer();
        this.addChild(layer);
    }
}
