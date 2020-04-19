class Tower1 extends GuaImage {
    constructor(game, name) {
        name = name || 'gun'
        super(game, name)
        this.setup()
    }
    setup() {
        this.attack = 1 
        this.range = 50
        this.target = null 
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
        let e = enemy
        let enemyExist = e !== null
        if (enemyExist) {
            return this.center().distance(e.center()) < this.range
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