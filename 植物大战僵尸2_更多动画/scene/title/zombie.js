class Zombie extends GuaAnimation {
    static new(game) {
        let animation = {
            name: 'bhzombie', 
            pathFormat: 'img/zombie/[action]/zombie_[action]_[index].png',
            actions: [
                {
                    name: 'walking',
                    numberOfFrames: 15, 
                },
                {
                    name: 'attack',
                    numberOfFrames: 11, 
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