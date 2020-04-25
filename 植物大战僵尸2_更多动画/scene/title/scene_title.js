class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup() 
    }
    setup() {
        this.setupInputs() 
        this.setupZombies()
        this.setupPlants()
    }
    setupPlants() {
        let p = Peashooter.new(this.game)
        p.x = 50
        p.y = 200 
        this.addElement(p)
        // window.z = zombie
    }
    setupZombies() {
        let zombie = Zombie.new(this.game)
        zombie.x = 200 
        zombie.y = 200 
        this.addElement(zombie)
    
        window.z = zombie
    }
    setupInputs() {
        
    }
}
