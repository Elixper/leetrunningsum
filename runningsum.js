/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  let arr = []
  while(arr.length <= nums.length+1){
  arr.unshift(nums.reduce((acc,curr)=>(acc+curr)));
  }
  arr.unshift(nums[0])
  return arr
};

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
console.log(runningSum([1,2,3,4]))
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].