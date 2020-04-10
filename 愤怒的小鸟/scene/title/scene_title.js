class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        
        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)
        // player 
        var w = GuaAnimation.new(game)
        w.x = 100 
        w.y = 50  
        this.w = w 
        this.addElement(w)

        this.setupInputs()
    }

    setupInputs() {
        var self = this 
        self.game.registerAction('a', function(keyStatus) {
            self.w.move(-2, keyStatus)
        })    

        self.game.registerAction('d', function(keyStatus) {
            self.w.move(2, keyStatus)
        })  
    }
}
