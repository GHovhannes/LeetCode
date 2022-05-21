/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let arr = [];
    let k = 0;
    let max = 0;
    let cons = 0;
      for(let i=0;i<nums.length+1;i++){
        if(nums[i] == 1) {
            cons++;
        }
        else{
            arr[k] = cons;
            cons = 0;
            k++;
        }
      }
    for(let j = 0;j < arr.length; j++){
        if(arr[j] > max){
            max = arr[j];
        }
    }
          return max;
};