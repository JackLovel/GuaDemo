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
            g.y = 500 
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 4
        // player 
        var b = GuaAnimation.new(game)
        b.x = 180 
        b.y = 200  
        this.bird = b 
        this.addElement(this.bird)

        this.setupInputs()
    }

    update() {
        super.update() 
        //  地面移动
        this.skipCount--
        var offset = -5  
        if (this.skipCount == 0) {
            this.skipCount = 4 
            offset = 15 
        }
        for (var i = 0; i < 30; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }

    setupInputs() {
        var self = this 
        var b = this.bird
        self.game.registerAction('a', function(keyStatus) {
            b.move(-2, keyStatus)
        })    

        self.game.registerAction('d', function(keyStatus) {
            b.move(2, keyStatus)
        })  
        self.game.registerAction('j', function(keyStatus) {
            b.jump() 
        })  
    }
}
