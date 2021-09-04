/**
 * Tower of Hanoi
 * 
 * #of pegs => 3
 * conditions:
 *  -   only one disk may be moved at a time
 *  -   each move consist of taking the upper disk from one of the rods and sliding it onto 
 *      another rod, on top of the other disks that may already be present on that rod.
 *  -   no disk may be placed on top of smaller disk 
 * 
 * find => moves required to move the whole shape to another rod. 
 * 
 * Base Case - if n=1, 
 *                  transfer the disk to A => C. (no aux rod).
 * 
 * Recursive Case
 *              if n > 1
 *                  if rod C top < current top
 *                  if 
 */


function TowerOfHanoi(n, from_rod, to_rod, aux_rod){
    if (n < 1) {
        return;
    }
    if(n === 1) {
        console.log(`${from_rod} to ${to_rod}`);
        return;
    } else {
        // move n-1 disk to aux first
        TowerOfHanoi(n-1, from_rod, aux_rod, to_rod);
        // move nth disk from_rod to to_rod
        console.log(`${from_rod} to ${to_rod}`);
        // move n-1 disk from aux_rod to to_rod 
        TowerOfHanoi(n-1, aux_rod, to_rod, from_rod);
    }
}
console.log(TowerOfHanoi(5, 'a', 'c', 'b'));