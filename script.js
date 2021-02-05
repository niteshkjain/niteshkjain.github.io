// Setting Register Column
function register(){
    var name = document.getElementById('fullname').value;
    var email = document.getElementById('eml').value;
    var address = document.getElementById('adrs').value;
    var phone = document.getElementById('ph').value;

    if (name == "" & email == "" & address == "" & phone == ""){
        alert("Please fill Registration form carefully.");
    }

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
        if(phone.match(/^\d{10}$/)){
            document.getElementById('rid').innerHTML = "Your registration number is: " + 12345 + "<br />" + "Your default password: " + "login";
            //Math.floor(Math.random() * 50000)
            $("#registered").modal();
        }
        else{
            alert("Please enter phone number carefully.")
        }
    }
    else{
        alert("You have entered an invalid email address!");
    }
    
    
    }

// Login Modal Controls
function login(){
    var loginemail = document.getElementById('leml').value;
    var loginpass = document.getElementById('lps').value;

    if (loginemail == "admin@dispur.in" & loginpass == "admin"){
        window.open("admin.html");
    }
    else if (loginemail == 12345 & loginpass == "login"){
        window.open("Customer.html");
    }
    else{
        alert("Oops! Please Check Your Credentials.");
    }
}

// Plans page controls
function relocate_home()
{
     window.location = "index.html";
} 

// View Data by Customer Registration ID
function showdata(){
   const x = document.getElementById('custdetail');
   const y = document.getElementById('footer');
   const z = document.getElementById('regId').value;
   if (z.length > 1){
   x.style.display = 'block';
   y.removeAttribute("style") 
}
}

function delcust(){
    const x = document.getElementById('custdetail');
    const y = document.getElementById('footer');
    const z = document.getElementById('delcust');
    x.style.display = 'none';
   y.setAttribute("style", "padding-top: 60vh");
   z.style.display = 'block';
}