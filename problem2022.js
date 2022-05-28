var construct2DArray = function(original, m, n) {
	if(m*n !== original.length){
		return [];
	}

	let count = 0;
	let matrix = [];
	while (count < original.length){
		let arr = [];
		for(let i=0; i<n; i++){
			arr.push(original[count])
			count++;
		}
		matrix.push(arr);
	}
	return matrix;
};



console.log(construct2DArray([1,2,3,4], 2, 2));