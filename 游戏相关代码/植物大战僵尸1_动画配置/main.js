var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            window.paused = !window.paused
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        window.fps = Number(input.value)
    })
}

var GuaAddAnimation = (images, animation) => {
    var a = animation
    var pathFormat = a.pathFormat
    var keyName = a.name
    for (var action of a.actions) {
        var name = action.name
        var numberOfFrames = action.numberOfFrames
        log('actions', action)
        // pathFormat: 'img/zombie/[action]/zombie_[action]_[index].png',
        var p = pathFormat.replace('[action]', name).replace('[action]', name)
        for (var i = 0; i < numberOfFrames; i++) {
            var index = '0'.repeat(String(numberOfFrames).length - String(i).length) + String(i)
            // var path = `${p}${index}`
            // var key = a.name + index 
            var key = keyName + name + index 
            var value = p.replace('[index]', index)
            images[key] = value 
        }
    }
}
var __main = function() {
    // zombie 
    let animationZombie = {
        name: 'bhzombie', 
        pathFormat: 'img/zombie/[action]/zombie_[action]_[index].png',
        actions: [
            {
                name: 'walking',
                numberOfFrames: 15, 
            },
            {
                name: 'attack',
                numberOfFrames: 11, 
            },
        ]
    }
    var images = {
        // zombie 
        // bhzombie00: 'img/BucketheadZombie/zombie00.png',
    }
    GuaAddAnimation(images, animationZombie)

    var game = GuaGame.instance(window.fps, images, function(g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        // var s = SceneEditor.new(g)
        g.runWithScene(s)
    })
}

__main()
