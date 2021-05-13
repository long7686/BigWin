(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts 2/CoinLabel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '04468ubWRtHHJA4xbrZFori', 'CoinLabel', __filename);
// scripts 2/CoinLabel.js

"use strict";

var Emitter = require('EventsListener');
cc.Class({
    extends: cc.Component,

    properties: {
        Label: cc.Label,
        coin: null,
        currentValue: 0,
        nextValue: 0,
        value: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.log(this.Label.string);
    },
    start: function start() {
        Emitter.instance.registerEvent("changeValue", this.changeValue.bind(this));
    },
    changeValue: function changeValue(userInput) {
        this.nextValue = parseInt(userInput);
        cc.tween(this).to(3, { value: this.nextValue }).start();
    },
    update: function update(dt) {
        this.Label.string = Math.floor(this.value);
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
        //# sourceMappingURL=CoinLabel.js.map
        