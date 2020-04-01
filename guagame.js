var GuaGame = function(fps, images, runCallback) {
    var g = {
        actions: {},
        keydowns: {},
        images: {},
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    g.drawImage = function(guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }

    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true
    })

    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }

    window.fps = 30
    // timer
    var runloop = function() {
        // event
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        context.clearRect(0, 0, canvas.width, canvas.height)
        // draw
        g.draw()

        // next run loop
        setTimeout(function() {
            runloop()
        }, 1000/window.fps)
    }
    //
    var loads = []
    // 预先载入所有图片
    var names = Object.keys(images)
    for (var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function() {
            // 存入 g.images 中
            g.images[name] = img
            // 所有图片都成功载入之后，调用 run
            loads.push(1)
            if (loads.length == names.length) {
                g.run()
            }
        }
    }
    g.imageByName = function(name) {
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    // 开始运行程序
    g.run = function() {
        runCallback(g)
        setTimeout(function() {
            runloop()
        }, 1000/fps)
    }
    return g
}
