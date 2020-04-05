class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'sky')
        this.player = GuaImage.new(game, 'player')
        this.cloud = GuaImage.new(game, 'cloud')
        this.player.x = 100
        this.player.y = 150

        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)
    }

    update() {
        this.cloud.y += 1
    }
}
