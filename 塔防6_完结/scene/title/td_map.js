class TDMap {
    constructor(game, w, h) {
        name = name || 'gun'
        this.w = w 
        this.h = h 
        this.setup() 
    }
    static new(...args) {
        return new this(...args)
    }
    addTower(i, j) {
        // log('grid', this.grid[14][12])
        // log('grid j, i', j, i)
        // 10 表示 tower 
        this.grid[j][i] = 10 
    }
    setup() {
        // 0 不能走 
        // 1 可以走 
        let grid = [
            [0, 0, 1, 0,],
            [1, 1, 1, 1,],
            [1, 1, 1, 1,],
            [1, 1, 1, 1,],
            [1, 1, 1, 1,],
            [0, 0, 1, 0,], 
        ]
        this.grid = grid
    }
    normalGrid() {
        let grid = [] 
        for (let column of this.grid) {
            let newColumn = [] 
            for (let flag of column) {
                if (flag != 1) {
                    newColumn.push(0)
                } else {
                    newColumn.push(1)
                }
            }
            grid.push(newColumn)
        }
        return grid 
    }
    pathfinding(i, j) {
        let map = this.normalGrid() 
        let graph = new Graph(map)
        let start = graph.grid[i][j]
        // end 就是目的地，是不会变的
        let end = graph.grid[5][2] 
        let result = astar.search(graph, start, end)
        // log('path finding', result)
        return result 
    }
}