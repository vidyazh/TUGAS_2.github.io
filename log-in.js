var usernameError = document.getElementById('username-error');
var passwordError = document.getElementById('password-error');

function validateUsername(){
    var username = document.getElementById('for-username').value;

    if(username.length == 0){
        usernameError.innerHTML = '<text>Tidak boleh kosong!</text>';
        return false;
    }
    else{
        usernameError.innerHTML = '<b>Valid</b>';
        return true;
    }
}

function validatePassword(){
    var password = document.getElementById('for-password').value;

    if(password.length == 0){
        passwordError.innerHTML = '<text>Tidak boleh kosong!</text>';
        return false;
    }
    else{
        passwordError.innerHTML = '<b>Valid</b>';
        return true;
    }
}

function validateForm(){

    if(!validateUsername() ||!validatePassword() ){
        Swal.fire("Masih ada bagian yang kosong !");
        return false;
        }
    else{
        swal.fire({
            title: 'Anda berhasil Log-in',
            timer: 1500
            })

    }
}