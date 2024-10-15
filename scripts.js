console.log('Hello World');

function register (e){
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;

    var msg = document.getElementById('msg');

    if(name == '' || email == '' || password == '' || password2 == ''){
        msg.className = "alert alert-danger";
        msg.innerHTML = 'Please fill out all Fields';
    }else {
        if(name.length < 4){
            msg.className = "alert alert-danger";
            msg.innerHTML = 'Name must be more than 4 characters';
        }else{
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if(atpos < 1 || dotpos < atpos+2 || dotpos +2 >= email.length){
                msg.className = "alert alert-danger";
                msg.innerHTML = 'Please use valid email';
            }else{
                if(password != password2){
                    msg.className = "alert alert-danger";
                    msg.innerHTML = 'Passwords do not match';
                }else{
                    msg.className = "alert alert-success";
                    msg.innerHTML = name+ ' is registered with email ' +email;
                }
            }
        }
    }
}

document.getElementById('reg').addEventListener('submit', register, false);

