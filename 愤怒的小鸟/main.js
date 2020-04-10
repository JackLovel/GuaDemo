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
        // 背景 
        cave: 'img/cave.png',
        // flappy bird image 
        bg: 'bird/bg.png', 
        ground: 'bird/ground.png',
        b1: 'bird/b1.png',
        b2: 'bird/b2.png',
        b3: 'bird/b3.png',
    }
    var game = GuaGame.instance(window.fps, images, function(g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
