const popup=document.getElementById('popup');
function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }

    else if(document.Formfill.Username.value.length<6){
            document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }

    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your email*";
        return false;
    }

    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your password*";
        return false;
    }

    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-Digit*";
        return false;
    }

    else if(document.Formfill.cPassword.value==""){
        document.getElementById("result").innerHTML="confirm your password*";
        return false;
    }

    else if(document.Formfill.cPassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password doesn't matched*";
        return false;
    }
    else{
        popup.classList.add("open-slide");
        return false;
    }
}

function CloseSlide(){
    popup.classList.remove("open-slide")
}
// if(document.Formfill.cPassword.value==document.Formfill.Password.value)