function permute(nums) {
    let result = [];
    if(nums.length === 1){
        result.push(nums);
        return result;
    }
    let n = nums.length-1;
    
    let prev_nums = permute(nums.slice(0, nums.length - 1));
    for(let i = 0; i < prev_nums.length;i++){
        for(let j = 0; j < prev_nums[i].length; j++){
            let copy = [...prev_nums[i]];
            copy.splice(j, 0, nums[n])
            result.push(copy);
        }
        copy = [...prev_nums[i]]; 
        copy.push(nums[n]);
        result.push(copy);
    }
    return result;
}

console.log(permute([1,2,3]));
/*
*/