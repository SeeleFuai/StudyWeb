

const API_BASE_URL = "http://localhost:3000";
document.getElementById('SignupForm').addEventListener('submit',formValidate)

const message = document.getElementById('message').value;
if(message){
    swal.fire(message);
}



function formValidate(e){
    e.preventDefault(); 
    
    var gmail = document.getElementById('gmail').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    if (gmail == "" || password == "" || confirmpassword == ""){
        swal.fire("Please Full Fill");
        return false;
    }
    else if(password != confirmpassword) {
        swal.fire("Password Do Not Match");
    
        return false;
    };
    console.log('ok');
    e.target.submit();
    return true;
    
}