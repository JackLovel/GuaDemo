class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup() 
    }
    setup() {
        // 先初始化属性
        this.enemies = [] 
        this.towers = [] 
        this.setupBG() 
        this.setupGameElements() 
        this.setupTower()
        this.setupHUD()
        this.setupInputs()
    }
    setupTower() {
        let t1 = Tower1.new(this.game)
        t1.x = 100 
        t1.y = 220
        this.addElement(t1) 
        //  
        this.towers.push(t1)
    }
    setupBG() {
        var bg = GuaImage.new(this.game, 'bg')
        this.addElement(bg)
    }
    setupGameElements() {
        for (var i = 0; i < 3; i++) {
            let e1 = Enemy.new(this.game)
            e1.x -= i * 50
            this.addElement(e1)  
            this.enemies.push(e1)  
        }
    }
    setupHUD() {
        var gun = GuaImage.new(this.game, 'gun')
        gun.x = 500 
        gun.y = 300
        this.gun = gun  
        this.addElement(gun)
    }
    debug() {
    }
    update() {
        super.update() 
        // 给所有没有target的tower 寻找目标
        for (let t of this.towers) {
            if (t.target === null) {
                t.findTarget(this.enemies)
            }
        }
    }

    setupInputs() {
        let self = this 
        // mouse inputs 
        let startDrag = false 
        this.game.registerMouse(function(event, status) {
            let x = event.offsetX
            let y = event.offsetY
            if (status == 'down') {
                let 点到了 = self.gun.pointInFrame(x, y) 
                if (点到了) {
                    startDrag = true 
                    self.tower = self.gun.clone() 
                    self.addElement(self.tower)
                } 
            } else if (status == 'move') {
                self.tower.x = x 
                self.tower.y = y 
            } else {
                startDrag = false
                // log('删除 tower', self.tower)
                self.removeElement(self.tower)
            }
        })
        // keyboard inputs 
    }
}
