var Scene = function(game) {
    var s = {
        game: game,
    }
    var paddle = Paddle(game)
    var ball = Ball(game)

    var score = 0
    var blocks = loadLevel(game, 1)

    game.registerAction('a', function() {
        paddle.moveLeft()
    })

    game.registerAction('d', function() {
        paddle.moveRight()
    })

    game.registerAction('f', function() {
        ball.fire()
    })

    s.draw = function() {
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
    s.update = function() {
        if (window.paused) {
            return
        }
        ball.move()
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转到游戏结束的场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
        }

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
    return s
}
