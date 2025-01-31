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

const ajax = function(request) {
    let r = new XMLHttpRequest() 
    r.open('GET', request.url, true)
    r.responseType = 'arraybuffer'
    r.onreadystatechange = event => {
        if (r.readyState == 4) {
            request.callback(r.response)
        }
    }
    r.send()
} 

var __main = function() {
    var images = {
        // 背景 
        cave: 'img/cave.png',
        // flappy bird image 
        bg: 'bird/bg.png',
        pipe: 'bird/pipe.png', 
        ground: 'bird/ground.png',
        b1: 'bird/b1.png',
        b2: 'bird/b2.png',
        b3: 'bird/b3.png',
    }
    let request = {
        url: "mario.nes",
        callback(r) {
            window.bytes = new Uint8Array(r)
            log('mario file', window.bytes.length)
            var game = GuaGame.instance(window.fps, images, function(g) {
                // var s = Scene.new(g)
                var s = SceneTitle.new(g)
                g.runWithScene(s)
            })
            enableDebugMode(game, true)
        },
    }
    ajax(request) 
}

__main()
