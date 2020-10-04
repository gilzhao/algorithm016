/**
 * @param {character[][]} grid
 * @return {number}
 */
let dfs = function(grid, i, j) {
    grid[i][j] = 0
    if (grid[i-1] && grid[i-1][j] == 1) dfs(grid, i-1, j)
    if (grid[i+1] && grid[i+1][j] == 1) dfs(grid, i+1, j)
    if (grid[i][j-1] && grid[i][j-1] == 1) dfs(grid, i, j-1)
    if (grid[i][j+1] && grid[i][j+1] == 1) dfs(grid, i, j+1)
}

var numIslands = function(grid) {
    if (grid.length < 1) return 0
    let isLands = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                isLands++
                dfs(grid, i, j)
            }
        }
    }

    return isLands
};