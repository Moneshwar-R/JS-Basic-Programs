let nums = [10,20,30];
let sum=0
for(let i=0;i<nums.length;i++){
    sum=sum+nums[i]
}
console.log(sum)

let res2=nums.reduce((a,b)=> {
    return a+b
})
console.log(res2)