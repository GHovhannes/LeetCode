 var diagonalSum = function(mat) {
    let gg = 0;
 let left = 0;
 let right = mat.length - 1;
 let counter = 0;
 let cc = (mat.length)/2 - 0.5;
 if(mat.length % 2 === 0){
     for (let i = 0; i < mat.length; i++){
         
         gg+=mat[i][left];
         left++;
 }
 for (let i = 0; i < mat.length; i++){
     
     counter+=mat[i][right];
     right--;
 }
 }
 else {
     for (let i = 0; i < mat.length; i++){
         
         gg+=mat[i][left];
         left++;
 }
 for (let i = 0; i < mat.length; i++){
     
     counter+=mat[i][right];
     right--;
 }
     counter = counter - mat[cc][cc];
 }
 let sum = counter + gg;
     return sum;
 };