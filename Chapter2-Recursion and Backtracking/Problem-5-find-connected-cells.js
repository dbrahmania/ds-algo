/**
 * Find the length of connected cells of 1s (regions) in an matrix of 0s and 1s. 
 * 
 * Given a matrix, each of which may be 0 or 1. The filled cells that are connected
 * form a region. Two cells are said to be connected if they are adjacent to each
 * other horizontally or vertically  or diagonally. There may be several regions in 
 * the matrix. How do you find the largest region (in terms of number of cells) in the 
 * matrix.
 */

const A = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0]
]

const regions = [];

function findRegions(i, j, x_max, y_max) {
    const directions = [
        [-1, -1], [0, -1,], [1, -1],
        [-1, 0], [1,0],
        [-1, 1], [0, 1], [1, 1]
    ]
    for(let direction=0; i< directions.length;i++) {
        if(direction[0]+i > x_max )
    }
}
function countMax(x_max, y_max) {
    for(let i=0; i<x_max;i++) {
        for( let j=0; j< y_max; j++) {
            if(A[i][j] === 1) {
                regions.push(findRegions(i, j, x_max, y_max));
            }
        }
    }
}