cc.Class({
    extends: cc.Component,

    properties: {
        arrowLeft: cc.Sprite,
        arrowRight: cc.Sprite,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.tween(this.arrowLeft.node)
            .repeatForever(
                cc.tween(this.arrowLeft.node)
                .to(.4, {color: new cc.Color(150, 150, 150,255)})
                .to(.4, {color: new cc.Color(255, 255, 255, 255)})
            )
            .start()
           
        cc.tween(this.arrowRight.node)
            .repeatForever(
                cc.tween(this.arrowRight.node)
                .to(.4, {color: new cc.Color(255, 255, 255, 255)})
                .to(.4, {color: new cc.Color(150, 150, 150,255)})  
            )
            .start()

        cc.tween(this.arrowRight.node)
            .repeatForever(
                cc.tween(this.arrowRight.node) 
                .to(.5, {scale:1.1})
                .to(.5, {scale:1})
            )
            .start()
        cc.tween(this.arrowLeft.node)
            .repeatForever(
                cc.tween(this.arrowLeft.node)
                .to(.5, {scale:1})
                .to(.5, {scale:1.1})
            )
            .start()

    },

    // update (dt) {},
});
