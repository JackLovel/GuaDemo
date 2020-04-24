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

var GuaAddAnimation = function(images, animation) {
    var a = animation
    // TODO, 现在只支持 2 位数 的 frames, 就该做成通用的
    for (var i = 0; i < a.numberOfFrames; i++) {
        // 1 01 
        // 11 11 
        var index = String(i)
        if (i < 10) {
            index = '0' + index 
        }
        // 
        var key = a.name + index 
        var value = a.pathFormat.replace('{}', index)
        images[key] = value 
    }
}

var __main = function() {
    // zombie 
    let animationZombie = {
        numberOfFrames: 14,
        name: 'bhzombie', 
        pathFormat: 'img/zombie/zombie_{}.png',
    }
    var images = {
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
