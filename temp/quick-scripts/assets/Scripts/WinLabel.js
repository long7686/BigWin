(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/WinLabel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd7987K+wO5P7KdcB9kn7Uj5', 'WinLabel', __filename);
// Scripts 3/WinLabel.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        letterW: cc.Sprite,
        letterI: cc.Sprite,
        letterN: cc.Sprite,
        Label: cc.Label,
        value: 0,
        nextValue: 0
    },

    onLoad: function onLoad() {
        this.node.scale = 0;
    },
    start: function start() {
        var onOffLight = cc.tween().to(.2, { color: new cc.Color(150, 150, 150, 255) }).to(.2, { color: new cc.Color(255, 255, 255, 255) });

        cc.tween(this.node).to(2, { scale: 1 }).start();

        onOffLight.clone(cc.find("Canvas/MainNode/W-I-N NeonLight/W")).repeatForever().start();
        onOffLight.clone(cc.find("Canvas/MainNode/W-I-N NeonLight/I")).repeatForever().start();
        onOffLight.clone(cc.find("Canvas/MainNode/W-I-N NeonLight/N")).repeatForever().start();

        this.nextValue = parseInt("1000000");
        cc.tween(this).to(3, { value: this.nextValue }).start();
    },
    update: function update(dt) {
        if (this.Label.string != "1000000") {
            this.Label.string = Math.floor(this.value);
            cc.log("123");
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=WinLabel.js.map
        