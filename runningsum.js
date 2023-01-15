/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  let arr = []
  let final = [...nums]
  while(arr.length < nums.length){
  arr.unshift(final.reduce((acc,curr)=>(acc+curr)));
  final.pop();
  }
  return arr
};

console.log(runningSum([3,1,2,10,1]))
console.log(runningSum([2,3,1]))
console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// var runningSum = function(nums) {
//   let arr = []
//   while(arr.length <= nums.length+1){
//   arr.unshift(nums.reduce((acc,curr)=>(acc+curr)));
//   nums.pop();
//   }
//   arr.unshift(nums[0])
//   return arr
// };