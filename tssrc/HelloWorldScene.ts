import HelloWorldLayer from './HelloWorldLayer'
import SpriteAnimationLayer from './SpriteAnimationLayer'

export class HelloWorldScene extends cc.Scene {
    onEnter() {
        super.onEnter();
        var layer = new SpriteAnimationLayer();
        this.addChild(layer);
    }
}
