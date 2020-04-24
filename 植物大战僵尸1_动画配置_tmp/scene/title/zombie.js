class Zombie extends GuaAnimation {
    static new(game) {
        let animation = {
            numberOfFrames: 14,
            name: 'bhzombie', 
            pathFormat: 'img/zombie/zombie_{}.png',
        }
        return new this(game, animation)
    }
    setup() {
    }
}