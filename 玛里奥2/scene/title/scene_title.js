class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        // 循环移动的地图
        this.grounds = [] 
        for (var i = 0; i < 30; i++) {
            var g = GuaImage.new(game, 'ground')
            g.x = i * 19 
            g.y =  540//500 
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 4
        // mario 
        let mario = GuaNesSprite.new(game)
        mario.x = 100 
        mario.y = 435  
        this.addElement(mario)
        this.mario = mario
     
        this.setupInputs()
    }
    debug() {
        this.birdSpeed = config.bird_speed.value
    }
    update() {
        super.update() 
    }

    setupInputs() {
        var self = this 
        var b = this.mario
        let playerSpeed = 5 
        self.game.registerAction('a', function(keyStatus) {
            b.move(-playerSpeed, keyStatus)
        })    

        self.game.registerAction('d', function(keyStatus) {
            b.move(playerSpeed, keyStatus)
        })  
        self.game.registerAction('j', function(keyStatus) {
            b.jump() 
        })  
    }
}
