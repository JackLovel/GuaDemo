class GuaParticle extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {  
        this.life = 70 
    }
    init(x, y, vx, vy) {
        this.x = x 
        this.y = y 
        this.vx = vx 
        this.vy = vy 
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        // 加速度
        var factor = 0.02
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}

class GuaParticleSystem {
    constructor(game) {
        this.game = game 
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.duration = 50
        this.x = 150
        this.y = 200
        this.numberOfParticles = 100
        this.particles = []
    }
    update() {
        this.duration--
        if (this.particles.length < this.numberOfParticles) {
            var p = GuaParticle.new(this.game)
            // 设置初始化坐标
            var s = 4 
            var vx = 0.1 * randomBetween(-s, s)
            var vy = 0.1 * randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // 更新所有的小火花
        for(var p of this.particles) {
            p.update()
        }
        // 删除死掉的小火花
        this.particles = this.particles.filter(p => p.life > 0)
    }
    draw() {
        if (this.duration < 0) {
            // 这是一个临时的方案
            // 应该从 scene 中删除自已才对
            return 
        }
        for(var p of this.particles) {
            p.draw()
        }
    }
}