var lengthOfLastWord = function(s) {
    let arr = [];
    let k = 0;
    let ans = 0;
    let cons = 0;
      for(let i=0;i<s.length+1;i++){
        if((s[i] >= "A"&&s[i]<="Z")||(s[i]>="a" && s[i]<="z")) {
            cons++;
        }
        else{
            arr[k] = cons;
            cons = 0;
            k++;
        }
      }
    for(let j = 1; j <=arr.length;j++){
        if(arr[arr.length - j]!=0){
            ans = arr[arr.length - j];
            return ans;
        }
    }
    ans = arr[arr.length - 1];      
    return ans;
};