const Emitter = require('EventsListener');
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

    onLoad () {
        cc.log(this.Label.string)
    },

    start () {
        Emitter.instance.registerEvent("changeValue", this.changeValue.bind(this))
    },


    changeValue(userInput){
        this.nextValue = parseInt(userInput)
        cc.tween(this)
            .to(3,{value: this.nextValue})
            .start()

    },

    update(dt){ 
        this.Label.string = Math.floor(this.value);
    }
});
