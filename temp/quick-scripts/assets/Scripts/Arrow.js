(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Arrow.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd1d26tWWqJJEoWb1L3qsau/', 'Arrow', __filename);
// Scripts 3/Arrow.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        arrowLeft: cc.Sprite,
        arrowRight: cc.Sprite
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        cc.tween(this.arrowLeft.node).repeatForever(cc.tween(this.arrowLeft.node).to(.4, { color: new cc.Color(150, 150, 150, 255) }).to(.4, { color: new cc.Color(255, 255, 255, 255) })).start();

        cc.tween(this.arrowRight.node).repeatForever(cc.tween(this.arrowRight.node).to(.4, { color: new cc.Color(255, 255, 255, 255) }).to(.4, { color: new cc.Color(150, 150, 150, 255) })).start();

        cc.tween(this.arrowRight.node).repeatForever(cc.tween(this.arrowRight.node).to(.5, { scale: 1.1 }).to(.5, { scale: 1 })).start();
        cc.tween(this.arrowLeft.node).repeatForever(cc.tween(this.arrowLeft.node).to(.5, { scale: 1 }).to(.5, { scale: 1.1 })).start();
    }
}

// update (dt) {},
);

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
        //# sourceMappingURL=Arrow.js.map
        