class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup() 
    }
    setup() {
        this.offsetY = 100 
        this.offsetX = 255
        this.heightOfRow = 100 
        // 
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
        for (var j = 0; j < 1; j++) {
            for (var i = 0; i < 5; i++) {
                let p = Peashooter.new(this.game)
                // 255 和 100 是 
                p.x = 255 + j * 80
                p.y = 100 + i * 100 
                this.addElement(p) 
            }
        }
    }
    addZombie(row) {
        // row 表示第几排
        let zombie = Zombie.new(this.game)
        zombie.x = 600 
        zombie.y = this.offsetY + row * this.heightOfRow 
        this.addElement(zombie)
    }
    setupZombies() {
        this.addZombie(1)
        this.addZombie(3)
    
        // window.z = zombie
    }
    setupInputs() {
        
    }
    update() {
        super.update() 
        // 碰撞检测

    }
}
