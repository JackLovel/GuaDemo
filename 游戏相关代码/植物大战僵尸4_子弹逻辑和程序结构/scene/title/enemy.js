class Enemy extends GuaImage {
    constructor(game, name) {
        name = name || 'soldier'
        super(game, name)
        this.tileSize = 0
        this.setup()
    }
    resetPath(path) {
        let steps = [] 
        let s = this.tileSize
        for (let p of path) {
            let c = [p.x * s, p.y * s]
            steps.push(c)
        }
        this.steps = steps
        this.stepIndex = 0 
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
    drawLifeBar() {
        let context = this.game.context 
        // 总血量
        context.fillStyle = 'red'
        let [x, y, w, h] = [this.x, this.y - 10, this.w, 10]
        context.fillRect(x, y, w, h)
        // 剩余血量
        context.fillStyle = 'green'
        let w1 = w * (this.hp / this.maxHP)
        context.fillRect(x, y, w1, h)
    }
    draw() {
        super.draw() 
        this.drawLifeBar() 
    }
    update() {
        if (this.dead) {
            return 
        }
        if (this.steps.length == 0) {
            return 
        }
        let [dx, dy] = this.steps[this.stepIndex]
        let signX = dx > this.x ? 1 : -1 
        let signY = dy > this.y ? 1 : -1 
        if (dx == this.x) {
            signX = 0 
        }
        if (dy == this.y) {
            signY = 0 
        }
        this.x += this.speed * signX
        this.y += this.speed * signY
        if (this.x == dx && this.y == dy) {
            // log('敌人已经到达')
            this.stepIndex++
            // 判断敌人是否到达终点
            if (this.stepIndex == this.steps.length) {
                // log('敌人到达终点')
                this.die() 
            }
        }
    }
    被攻击(ap) {
        // ap 就是攻击力
        this.hp -= ap 
        if (this.hp <= 0) {
            this.die()
        }
    }
    die() {
        this.dead = true 
        // 先应该播放闪动的动画
        // 然后还应该把元素移除出场景中
        this.scene.removeElement(this)
        // log('敌人死了')
    }
}