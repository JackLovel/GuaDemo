var e = sel => document.querySelector(sel)
var b = e('.gua-fg')

bar.Style.left = '0px'
var guaMoving = false
var initX = 0
var initLeft
e('.gua-fg').addEventListener('mousedown', event => {
    guaMoving = true
    initX = event.clientX
    initLeft = pos(bar)
})

e('.gua-fg').addEventListener('mousemove', event => {
    if (guaMoving) {
        var offset = event.clientX - initX
        setPos(bar, initLeft + offset)
    }
})

e('.gua-fg').addEventListener('mouseup', event => {
    guaMoving = false
})
