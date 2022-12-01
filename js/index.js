function newfun() {
    var btn=document.getElementById("mybtn")
    var men=document.getElementById("left")
    if(men.style.left="-200%"){
        men.style.left="-100px";
    }
    else {
        men.style.left="-200%" ;
    }
}
function exite(){
    ex=document.getElementById("left")
    if(ex.style.left="-100px"){
        ex.style.left="-200%";
    }
    else {
        ex.style.left="block" ;
    }
}
setTimeout( function load(){
    var ll=document.getElementById("load") 
    if(ll.style.display="block"){
        ll.style.display="none"
    }
    else{
        ll.style.display="none"
    }
},) 