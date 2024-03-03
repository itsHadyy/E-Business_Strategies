function showModal(){
    document.getElementById("modal").style.visibility = "visible";
    document.getElementById("modal").style.opacity = "1";
    document.getElementById("main").style.filter = "blur(8px)";
}

function closeModal(){
    document.getElementById("modal").style.opacity = "0";
    document.getElementById("modal").style.visibility = "hidden";
    document.getElementById("main").style.filter = "blur(0px)";
}