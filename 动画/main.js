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
var __main = function() {
    var images = {
        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/sky.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        fire: 'img/fire.png',
        // 走路动画
        // w1: 'img/walking/w1.png',
        // w2: 'img/walking/w2.png',
        // w3: 'img/walking/w3.png',
        // w4: 'img/walking/w4.png',
        // w5: 'img/walking/w5.png',
        // w6: 'img/walking/w6.png',
        // w7: 'img/walking/w7.png',
        // w8: 'img/walking/w8.png',
        // 闲置
        idle1: 'img/player-idle/Idle__000.png',
        idle2: 'img/player-idle/Idle__001.png',
        idle3: 'img/player-idle/Idle__002.png',
        idle4: 'img/player-idle/Idle__003.png',
        idle5: 'img/player-idle/Idle__004.png',
        idle6: 'img/player-idle/Idle__005.png',
        idle7: 'img/player-idle/Idle__006.png',
        idle8: 'img/player-idle/Idle__007.png',
        idle9: 'img/player-idle/Idle__008.png',
        idle10: 'img/player-idle/Idle__009.png',
        // 跑动
        run1: 'img/player-run/Run__000.png',
        run2: 'img/player-run/Run__001.png',
        run3: 'img/player-run/Run__002.png',
        run4: 'img/player-run/Run__003.png',
        run5: 'img/player-run/Run__004.png',
        run6: 'img/player-run/Run__005.png',
        run7: 'img/player-run/Run__006.png',
        run8: 'img/player-run/Run__007.png',
        run9: 'img/player-run/Run__008.png',
        run10: 'img/player-run/Run__009.png',
    }
    var game = GuaGame.instance(window.fps, images, function(g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
