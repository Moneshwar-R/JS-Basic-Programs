str=["hello","how","are","you"]
res=[]
for(let i=0;i<str.length;i++){
    res.push(str[i].toUpperCase())
}
console.log(res)

let res2=str.map((s)=>s.toUpperCase())
console.log(res2)