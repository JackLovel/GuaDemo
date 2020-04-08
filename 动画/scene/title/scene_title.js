class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello from gua')
        this.addElement(label)

        var w = GuaAnimation.new(game)
        w.x = 100 
        w.y = 200 
        this.addElement(w)
    }
}
