//here, z is default parameter added after required parameters x and y
function add(x: number, y: number, z: number = 0):number {
    return x + y + z;
    }
    let result1 ;
    result1= add(2, 3); //5
    let result2 = add(2, 3, 5); //10
    console.log(result1);
    console.log(result2)