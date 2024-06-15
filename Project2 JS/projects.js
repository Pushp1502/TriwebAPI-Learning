let myUser=null ;
const red_block = document.getElementById('red_block');
const green_block = document.getElementById('green_block');
const blue_block = document.getElementById('blue_block');
const yellow_block = document.getElementById('yellow_block');

const pro_user = document.getElementById('pro_user');

const btn_add_user = document.getElementById('btn_add_user');
const btn_delete_user = document.getElementById('btn_delete_user');

const btn_move_to_red = document.getElementById('btn_move_to_red');
const btn_move_to_green = document.getElementById('btn_move_to_green');
const btn_move_to_blue = document.getElementById('btn_move_to_blue');
const btn_move_to_yellow = document.getElementById('btn_move_to_yellow');

function addUser(){
    if(myUser==null){
        myUser=document.createElement('div')
        //add a class
        myUser.className="my_user";
        //add an id to control class
        myUser.setAttribute("id","my_user");
        //value from input box
        myUser.innerHTML=pro_user.value;

        pro_user.disabled=true;
        btn_add_user.disabled=true;
        btn_delete_user.disabled=false;
        // console.log(myUser);
        red_block.append(myUser); 
    }
}
function deleteUser(){
    if(myUser!=null){
        pro_user.value=null;
        myUser.remove();
        pro_user.disabled=false;
        btn_add_user.disabled=false;
        btn_delete_user.disabled=true;
        myUser=null;
    }
}
function toGreen(){
    if(myUser!=null){
    green_block.append(myUser);
    }
}
function toYellow(){
    if(myUser!=null){
    yellow_block.append(myUser);
    }
}
function toBlue(){
    if(myUser!=null){
    blue_block.append(myUser);
    }
}
function toRed(){
    if(myUser!=null){
    red_block.append(myUser);
    }
}
btn_add_user.addEventListener("click", addUser);
btn_delete_user.addEventListener("click", deleteUser);
btn_move_to_green.addEventListener("click",toGreen);
btn_move_to_yellow.addEventListener("click",toYellow);
btn_move_to_blue.addEventListener("click",toBlue);
btn_move_to_red.addEventListener("click",toRed);