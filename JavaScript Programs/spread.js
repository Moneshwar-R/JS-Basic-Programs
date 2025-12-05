var person={
    name:"John",
    age:30,
    gender:"Male"
}
var details={
    country:"USA",
    occupation:"Engineer"
}
var merged={...person,...details}
console.log(merged)

//////////////////////////////////////////

const {name,age}=person
console.log("Name:",name)
console.log("Age:",age)

///////////////////////////////////////////

var copyPerson={...person}
console.log(copyPerson)

////////////////////////////////////////////

var nums1=[1,2,3,4,5]
var nums2=[6,7,8,9,10]
var combined=[...nums1,...nums2]
console.log(combined)

///////////////////////////////////////////

function sum(...num){
    let sum=0
    for(let n of num){
        sum+=n
    }
    console.log("Sum:",sum)
}
sum(1)
sum(1,2,3)
sum(4,5,6,7,8)
sum(9,10,11,12,13,14)