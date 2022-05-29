function construct2DArray(original, m, n) {
    const l = original.length;
  
    if (m * n !== l) {
        return [];
    }
  
    let matrix = [];
  
    for (let i = 0; i < l; i+=n){
        matrix.push(original.slice(i, (i + n)));
    };
  
    return matrix;
  }




  console.log(construct2DArray([1,2,3,4], 2, 2));