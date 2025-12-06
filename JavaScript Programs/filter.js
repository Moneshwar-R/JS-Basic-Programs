let nums = [10,1,2,4,5,12, 20, 30, 40];
let res = [];
for(let i=0;i<nums.length;i++){
    if(nums[i]>=20){
        res.push(nums[i]);
    }
}
console.log(res);

let res2=nums.filter((n)=> n%2==1 );
console.log(res2);