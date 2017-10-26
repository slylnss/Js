var resultats = document.getElementById("#info");

function ajax_get_json(){
    var xmlhttp;

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readystate === 4 && xmlhttp.status === 200){
            alert(xmlhttp.responseText);
        }
    }

    xmlhttp.open("GET", "ex11.json", true);
    xmlhttp.send();
}   
