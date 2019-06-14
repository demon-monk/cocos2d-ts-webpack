import HelloWorldLayer from './HelloWorldLayer'
import SpriteAnimationLayer from './SpriteAnimationLayer'
import PListAnimationLayer from './PListAnimationLayer'

export class HelloWorldScene extends cc.Scene {
    onEnter() {
        super.onEnter();
        var layer = new PListAnimationLayer();
        this.addChild(layer);
    }
}
