class Peashooter extends GuaAnimation {
    static new(game) {
        let animation = {
            name: 'peashooter', 
            pathFormat: 'img/peashooter/[action]/peashooter_[action]_[index].png',
            actions: [
                {
                    name: 'idle',
                    numberOfFrames: 13, 
                },
            ]
        }
        return new this(game, animation)
    }
    setup() {
        this.map = null 
        this.stepIndex = 0
        this.steps = []
        this.dead = false 
        // this.x = 
        this.y = 170
        this.speed = 2 
        this.maxHP = 18 
        this.hp = this.maxHP
        this.destination = 500 
    }
}