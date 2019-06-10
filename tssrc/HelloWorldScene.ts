import HelloWorldLayer from './HelloWorldLayer'

export class HelloWorldScene extends cc.Scene {
    onEnter() {
        super.onEnter();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
}
