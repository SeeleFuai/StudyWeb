

function formValidate(e) {
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
    }

    const userData = {
        gmail: document.getElementById('gmail').value.trim(),
        password: document.getElementById('password').value.trim(),
    };
    createNewUser(userData);

};

async function createNewUser(userData){
    const response = await fetch(`${API_BASE_URL}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    if(!response.ok)
    {
        const error = await response.json();
        throw new Error(error.message || "Failed to create user");
    }
    return response.json();
}
