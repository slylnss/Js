var resultats = document.getElementById("info");

function ajax_get_json(){
    var xmlhttp;

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var datos = JSON.parse(xmlhttp.responseText);
            if(resultats.innerHTML === ""){
                for (var i in datos){
                    resultats.innerHTML += datos[i].name + "<br/>" + datos[i].birthday + "<br/>" + datos[i].country + "<hr/>";
                    var a=[],b=[],c=[];
                    var bahrainNbr=0;
                    xmlhttp.onload = function (event) {
                        var datos=JSON.parse(xmlhttp.responseText)
                        datos.forEach(function(element){
                        element["score"]=Math.floor(Math.random()*1000);
                    });
                    datos.sort(function (a,b) {
                        return a.score-b.score;
                    });
                    console.log(datos);
                    datos.forEach(function (j) {
                        if (j.score >750) {
                            a.push(j);
                        }
                        else if (j.score >500) {
                            b.push(j);
                        }
                        else if (j.score <500) {
                            c.push(j);
                        }
                    });
                    datos.forEach(function (j) {
                        if (j.country =="Bahrain") {
                            bahrainNbr++;
                        }
                    });
                    console.log("le plus grand score : ",datos[datos.length-1].score);
                    };
                }
            }
        }
    }
    xmlhttp.open("GET", "ex11.json", true);
    xmlhttp.send();
}
