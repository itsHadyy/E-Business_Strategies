function setNone(){
    document.getElementById("red").style.display = "none";
}
    


document.getElementById("yellow").onclick = function(){
    document.getElementById("yellow").style.display = "none";
}

document.getElementById("blue").onclick = function(){
    document.getElementById("blue").style.display = "none";
}

document.getElementById("green").onclick = function(){
    document.getElementById("green").style.display = "none";
}

document.getElementById("button").onclick = function(){
    document.getElementById("red").style.display = "block";
    document.getElementById("blue").style.display = "block";
    document.getElementById("yellow").style.display = "block";
    document.getElementById("green").style.display = "block";
}

function check(){
    stringLength = document.getElementById("txt").value.length;

    if (stringLength >14){
        alert("Warning the maximum number of characters is 14");
        document.getElementById("warning").innerText = "Warning the maximum number of characters is 14";
    }
    else{
        document.getElementById("warning").innerText = "";
    }
}