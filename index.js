//Problem 1 : part_1 -> Max subarray sum

function maxSum(arr){
  //initially max_sum and curr_sum setting 1st element of array
  let max_sum = arr[0];//max_sum will store max sum encountered so far 
  let curr_sum = arr[0];//curr sum will store the sum of curr subarray

  //iterate from the 2nd element 
  for (let i = 1; i < arr.length; i++) {
    //we update curr_sum to be maximum
    curr_sum = Math.max(arr[i], curr_sum + arr[i]);
    //update max_sum to be maximum of curr_sum and max_sum to ensure highest possible sum.
    max_sum = Math.max(max_sum, curr_sum);
  }
  return max_sum;//returning maximum sum of array
}
const arr = [1,2,4,5,6,7,8];
console.log("Max subarray sum :",maxSum(arr));// passing array to maxSum fn and printing the sum

//part_2 -> Rotate array by K position

function rotateArray(num,k){
    k = k%num.length;

    function rev(nums,start,end){
        while(start<end){
            [nums[start],nums[end]]=[nums[end],nums[start]];
            start++;
            end--;
        }
    }
    rev(num,0,num.length-1);
    rev(num,0,k-1);
    rev(num,k,num.length-1);
}

let num = [1,2,3,5,6,7,9];
console.log("Og array:",num);


rotateArray(num,2);
console.log('reversed array :',num);