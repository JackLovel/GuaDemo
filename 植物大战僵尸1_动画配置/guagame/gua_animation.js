class GuaAnimation {
    constructor(game, animation) {
        // let animationZombie = {
        //     name: 'bhzombie', 
        //     pathFormat: 'img/zombie/[action]/zombie_[action]_[index].png',
        //     actions: [
        //         {
        //             name: 'walking',
        //             numberOfFrames: 15, 
        //         },
        //         {
        //             name: 'attack',
        //             numberOfFrames: 11, 
        //         },
        //     ]
        // }
        let a = animation
        this.game = game 
        this.animations = {}
        for (var action of a.actions) {
            this.animations[action.name] = [] 
            // var prefix = action.name 
            for (var i = 1; i < action.numberOfFrames; i++) {
                var index = '0'.repeat(String(action.numberOfFrames).length - String(i).length) + String(i)
                var key = a.name  + action.name + index 
                // var name = `${prefix}${index}`
                var t = game.textureByName(key)
                this.animations[action.name].push(t)
            }
        }
        this.animationName = a.actions[0].name
        this.texture = this.frames()[0]
        this.w = this.texture.width 
        this.h = this.texture.height 
        this.frameIndex = 0 
        this.frameCount = this.frames().length
        //  
        this.flipX = false // 水平翻转
        this.rotation = 0 
        this.alpha = 1 
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    updateFrame() {
       // 
       this.frameCount-- 
       if (this.frameCount == 0) {
           this.frameCount = 3
           this.frameIndex = (this.frameIndex + 1) % this.frames().length
           this.texture = this.frames()[this.frameIndex]
       }
    }
    update() {
        this.updateFrame() 
    }
    draw() {
        var context = this.game.context
        context.save() 

        var x = this.x + this.w / 2
        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)        
        }
        context.globalAlpha = this.alpha
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
    changeAnimation(name) {
        this.animationName = name 
    }
}