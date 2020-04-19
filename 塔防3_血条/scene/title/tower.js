class Tower1 extends GuaImage {
    constructor(game, name) {
        name = name || 'gun'
        super(game, name)
        this.setup()
    }
    setup() {
        this.attack = 1 
        this.range = 150
        this.target = null 
        this._cooldown = 3
        this._fireCount = 0 
    }
    drawAttackRange() {
        let context = this.game.context 
        context.fillStyle = 'rgba(200, 200, 200, 0.5)'
        context.beginPath() 
        // log('tower draw', this, this.center)
        let v = this.center() 
        context.arc(v.x, v.y, this.range, 0, Math.PI * 2)
        context.fill()
    }
    draw() {
        this.drawAttackRange()
        // 
        super.draw() 
    }
    update() {
        let target = this.target
        // TODO，当敌人渐渐运去，你要设置 target = null 
        if (this.canAttack(target)) {
            log('攻击敌人')
            target.被攻击(this.attack)
            if (target.dead) {
                this.target = null 
            }
        }
    }
    canAttack(enemy) {
        // 
        let e = enemy
        let enemyExist = e !== null && !e.dead
        if (enemyExist) {
            let can = this.center().distance(e.center()) < this.range
            // 
               // 检查是否冷却
            if (this._fireCount != 0) {
                this._fireCount--
                return false
            } else {
                this._fireCount = this._cooldown
                return can 
            }
        } else {
            return false 
        }
    }
    findTarget(enemies) {
        for (let e of enemies) {
            // do what, 不 do how 
            if (this.canAttack(e)) {
                this.target = e 
                break 
            }
        }
    }
}