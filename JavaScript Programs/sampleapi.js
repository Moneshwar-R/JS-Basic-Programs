async function loadData(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        var data=await res.json();
        console.log(data);
    }catch{
        console.log("Failed to fetch data");
    }
}
loadData()

async function createUser(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:"Ravi",
                gender:"Male"
            })
        })
        let data=await res.json()
        console.log("User created successfully",data)
    }catch{
        console.log("Failed to create user")
    }
}
createUser()

async function updateUser(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:"Ravi Kumar",
                gender:"Male"
            })
        })
        let data=await res.json()
        console.log("User updated successfully",data)
    }catch{
        console.log("Failed to update user")
    }
}
updateUser()

async function deleteUser(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method:"DELETE"
        })
        console.log("User deleted successfully")
    }catch{
        console.log("Failed to delete user")
    }
}
deleteUser()