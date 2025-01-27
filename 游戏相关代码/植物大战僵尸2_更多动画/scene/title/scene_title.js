class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup() 
    }
    setup() {
        this.setupBG() 
        this.setupInputs() 
        this.setupZombies()
        this.setupPlants()
    }
    setupBG() {
        let bg = GuaImage.new(this.game, 'bg1')
        this.addElement(bg)
    }
    setupPlants() {
        let p = Peashooter.new(this.game)
        p.x = 350
        p.y = 200 
        this.addElement(p)
        // window.z = zombie
    }
    setupZombies() {
        let zombie = Zombie.new(this.game)
        zombie.x = 1200 
        zombie.y = 200 
        this.addElement(zombie)
    
        window.z = zombie
    }
    setupInputs() {
        
    }
}
