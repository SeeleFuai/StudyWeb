const API_BASE_URL = "http://localhost:3000";

document.getElementById('SignupForm').addEventListener('submit',formValidate)


async function formValidate(e){
    e.preventDefault(); 
    console.log('ok');
    var gmail = document.getElementById('gmail').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    if (gmail == "" || password == "" || confirmpassword == ""){
        swal.fire('pls full fill');
        return false
    }
    else if(password != confirmpassword) {
        swal.fire('password not match');
        return false
    };
    const userData = {
        gmail: document.getElementById('gmail').value,
        password: document.getElementById('password').value,
    };
    try
    {
        await createUser(userData);
    } catch(error) {
        console.log(error);
    }
     
}

async function createUser(userdata) {
    const response = await fetch(`http://localhost:3000/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdata),
    });    
    if (!response.ok) {
    const error = await response.json();
    throw new Error("Failed to create course");
    }
    return response.json();
}

