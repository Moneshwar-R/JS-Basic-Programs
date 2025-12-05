function display(){
    console.log("Outside setTimeout");
    setTimeout(()=>{
        console.log("Inside setTimeout");
    },2000)
    console.log("End of display function");
}
display();
console.log("Good Morning")