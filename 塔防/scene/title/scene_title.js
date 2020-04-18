class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup() 
    }
    setup() {
        // bg 
        var bg = GuaImage.new(this.game, 'bg')
        this.addElement(bg)
        //
        this.setupInputs()
    }
    debug() {
    }
    update() {
        super.update() 
    }

    setupInputs() {
        // mouse inputs 
        this.game.registerMouse(function(event, status) {
            log('mouse event', status, event)
        })
        // keyboard inputs 
        var self = this 
        var b = this.mario
        let playerSpeed = 5
    }
}
