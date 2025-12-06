let nums = [10,1,2,4,5,12, 20, 30, 40];
let res = [];
for(let i=0;i<nums.length;i++){
    if(nums[i]>=20){
        console.log(nums[i])
        return
    }
}

let res2=nums.find((n)=> n>=20)
console.log(res2)