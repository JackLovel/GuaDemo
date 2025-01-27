class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup() 
    }
    // setup 系列
    setup() {
        this.zombies = []
        this.plants = []     
        this.bullets = []      
        this.offsetX = 255
        this.offsetY = 100 
        this.zombieOffsetY = 30 
        this.widthOfColumn = 80 
        this.heightOfRow = 100 
        // 
        this.bulletHitOffset = config.hit_offset.value
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
                // 255 和 100 是 横纵的 offset
                // p.x = 255 + j * 80
                // p.y = 100 + i * 100 
                // this.addElement(p) 
                this.addPlant(p, i, j)
            }
        }
    }
    setupZombies() {
        this.addZombie(1)
        this.addZombie(3)
    
        // window.z = zombie
    }
    setupInputs() {
        
    }
    // add 系列
    addPlant(plant, row, column) {
        let p = plant
        p.x = this.offsetX + column * this.widthOfColumn 
        p.y = this.offsetY + row * this.heightOfRow
        p.row = row 
        this.addElement(p) 
        this.plants.push(p)
    }
    addZombie(row) {
        // row 表示第几排
        let zombie = Zombie.new(this.game)
        zombie.x = 600 
        zombie.y = this.zombieOffsetY + row * this.heightOfRow 
        zombie.row = row 
        this.addElement(zombie)
        this.zombies.push(zombie)
    }
    // remove 系列
    removeBullet(bullet) {
        this.bullets = this.bullets.filter(e => {
            return e != bullet
        })
        this.removeElement(bullet)
    }
    removeZombie(zombie) {
        this.zombies = this.zombies.filter(z => {
            return z != zombie
        })
        log('remove zombie', this.zombies.length, zombie)
        this.removeElement(zombie)
    }
    // debug 系列
    debug() {
        this.bulletHitOffset = config.hit_offset.value 
    }
    // update 系列
    update() {
        super.update() 
        // 碰撞开头和碰撞
        this.updateFire() 
        this.updateHit()
    }
    updateFire() {
        for (let p of this.plants) {
            p.sleep()
            for (let z of this.zombies) {
                if (z.row == p.row) {
                    p.awake()
                }
            }
        }
    }
    updateHit() {
        for (let z of this.zombies) {
            let row = z.row 
            for (let b of this.bullets) {
                if (b.row == row) {
                    // 判断是否相撞
                    if (z.x - b.x < this.bulletHitOffset) {
                        z.被击中(b.damage)
                        b.remove()
                        // 临时性的修改
                        // b.x += 10000
                    }
                }
            }
        }
    }
}
