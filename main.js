var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }

    return blocks
}

var blocks = []
var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        window.fps = Number(input.value)
    })
}
var __main = function() {
    var images = {
        ball: 'ball.png',
        block: 'block.png',
        paddle: 'paddle.png',
    }
    // var fps = window.fps
    var game = GuaGame(window.fps, images, function(g) {
        var paddle = Paddle(game)
        var ball = Ball(game)

        var score = 0
        blocks = loadLevel(game, 1)

        // var paused = false
        game.registerAction('a', function() {
            paddle.moveLeft()
        })

        game.registerAction('d', function() {
            paddle.moveRight()
        })

        game.registerAction('f', function() {
            ball.fire()
        })

        game.update = function() {
            if (window.paused) {
                return
            }
            ball.move()

            if (paddle.collide(ball)) {
                ball.反弹()
                // ball.speedY *= -1
            }

            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if (block.collide(ball)) {
                    block.kill()
                    ball.反弹()
                    score += 100
                }
            }
        }
        // mouse event
        var enableDrag = false
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y)
            // 检查是否点中 ball
            if (ball.hasPoint(x, y)) {
                // 设置拖拽状态
                enableDrag = true
            }
        })
        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'move')
            if (enableDrag) {
                ball.x = x
                ball.y = y
            }
        })
        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'up')
            enableDrag = false
        })
        game.draw = function() {
            // draw background
            game.context.fillStyle = "#544"
            game.context.fillRect(0, 0, 400, 300)

            game.drawImage(paddle)
            game.drawImage(ball)
            // draw blocks
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if (block.alive) {
                    game.drawImage(block)
                }
            }
            game.context.fillText('分数：' + score, 10, 290)
        }
    })

    enableDebugMode(game, true)
}

__main()
