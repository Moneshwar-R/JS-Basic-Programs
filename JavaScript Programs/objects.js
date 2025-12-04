let person={
    name:"Moneshwar R",
    age:21
}
console.log(person)
console.log(person.name)

let person1=new Object()
person1.name="Ravi"
person1.age=22
console.log(person1)
console.log(person1.name)

function Person(name,age){
    this.name=name
    this.age=age
}
let p1=new Person("Vikram",23)
console.log(p1)
console.log(p1.name)  