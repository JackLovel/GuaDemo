class Pipes {
    constructor(game) {
        this.game = game 
        this.pipes = [] 
        this.pipSpace = 150 
        this.管子横向间距 = 200
        this.columsOfPipe = 3 
    }
    static new(game) {
        return new this(game)
    }
    debug() {
        this.管子横向间距 = config.管子横向间距.value
        this.pipSpace = config.pip_space.value
        // debugger
    }
    update() {
       
    }
    draw() {
        var context = this.game.context
    }
}
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)
        // 加入水管 
        // this.pipe = Pipes.new(game)
        // this.addElement(this.pipe)

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
        // bird 
        // this.birdSpeed = 2 
        // player 
        // var b = GuaAnimation.new(game)
        // b.x = 180 
        // b.y = 200  
        // this.bird = b 
        // this.addElement(this.bird)

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
        // var b = this.bird
        self.game.registerAction('a', function(keyStatus) {
            // b.move(-self.birdSpeed, keyStatus)
        })    

        self.game.registerAction('d', function(keyStatus) {
            // b.move(self.birdSpeed, keyStatus)
        })  
        self.game.registerAction('j', function(keyStatus) {
            // b.jump() 
        })  
    }
}
