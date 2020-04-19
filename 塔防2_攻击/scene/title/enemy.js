class Enemy extends GuaImage {
    constructor(game, name) {
        name = name || 't1'
        super(game, name)
        this.setup()
    }
    setup() {
        this.y = 200 
        this.speed = 3 
        this.hp = 3
        this.destination = 500 
    }
    update() {
        this.x += this.speed
        if (this.x > this.destination) {
            log('敌人已经到达')
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
        log('敌人死了')
    }
}