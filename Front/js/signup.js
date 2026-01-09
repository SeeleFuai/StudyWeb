const API_BASE_URL = "http://localhost:3000";

const SignUpForm = document.getElementById('SignupForm');


document.addEventListener('DOMContentLoaded',async () =>{
    SignUpForm.addEventListener('submit',formValidate);    
});

function formValidate(e){
    e.preventDefault();
    var gmail = document.getElementById('gmail').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    if (gmail == "" || password == "" || confirmpassword == ""){
        swal.fire('pls full fill');
    }
    else if(password != confirmpassword) {
        swal.fire('password not match');
    }
    // e.target.submit();
    const userData = {
        gmail:document.getElementById('gmail').value,
        password:document.getElementById('password').value,
    }
    createUser(userData);

}


//
async function createUser(userdata) {
  const response = await fetch(`${API_BASE_URL}/user/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userdata),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create student");
  }
  console.log('fetched')
  // thieu await
  const result = await response.json();
  console.log(result)
  return result;
}

