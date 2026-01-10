const API_BASE_URL = "http://localhost:3000";
document.getElementById('LoginForm').addEventListener('submit',formValidate)

const message = document.getElementById('message').value;
if(message){
    swal.fire(message);
}

function formValidate(e){
    e.preventDefault(); 
    
    var gmail = document.getElementById('gmail').value;
    var password = document.getElementById('password').value;
    if (gmail == "" || password == ""){
        return false;
    }
    e.target.submit();
    return true;
}
        
