// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137]
function lower_array(arr){
   let low=arr[0];
   for(const ell of arr){
    if(ell<low){
        low=ell;
    }
   }

    return low;
}

 const heights = [167, 190, 120, 165, 137];
const ans=lower_array(heights);
console.log(ans);
