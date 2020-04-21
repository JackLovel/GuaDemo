class TDMap {
    constructor(game, w, h) {
        name = name || 'gun'
        super(game, name)
        this.setup()
    }
    static new(...args) {
        return new this(...args)
    }
    setup() {
    }
}