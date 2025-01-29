function lugemine (){
    document.getElementById("vastus").innerHTML=
        "Tere hommikult, "+
        document.getElementById("nimi").value+
    " "+document.getElementById("perekonna").value;

}
//sama funktsion koos muutujatega//
function lugemine2 () {
    let nimi = document.getElementById("nimi").value;
    let perekonna = document.getElementById("perekonna").value;
    let vastus = document.getElementById("vastus");
    let varv = document.getElementById("varv");
    //radio- nupp//
    let mees = document.getElementById("mees");
    let naine = document.getElementById("naine");
    let synni = document.getElementById("synni").value;
    let vanus = document.getElementById("vanus").value;
    let posti = document.getElementById("posti").value;
    let telef = document.getElementById("telef").value;
    let isik = document.getElementById("isik").value;
    let pilt = document.getElementById("pilt");



    if (mees.checked) {

    vastus.innerHTML =
        "Tere hommikult, mees " + nimi + " " + perekonna+ "!"+
        "  Sinu sünnipäev on "+synni+ "."+
        " Sinu vanus on "+ vanus+ "."+
    "<br> Sinu e-posti aadres on "+ posti+ "."+
    "<br> Sinu telefoni number on" + telef+ "."+
    "<br> Sinu isikukood on "+ isik ;

    vastus.style.color=varv.value;
    pilt.src="mees.png"

}
else  if (naine.checked) {
        vastus.innerHTML =
            "Tere hommikult, naine " + nimi + " " + perekonna+ "!"+
        " Sinu sünnipäev on "+synni+ "."+
            " Sinu vanus on "+ vanus+ "."+
            "<br> Sinu e-posti aadres on "+ posti+ "."+
            "<br> Sinu telefoni number on" + telef+ "."+
            "<br> Sinu isikukood on "+ isik;
        vastus.style.color=varv.value;
        pilt.src="naine.png"
} else {
    vastus.innerHTML ="palun vali sugu!"
    }
}
function selectvalik(){
    let vastus2 = document.getElementById("vastus2");
    let linn=document.getElementById("linn");

    vastus2.innerHTML="Sinu linn - "+ linn.value;
    vastus2.style.background = "#c1b1e1"
}
function chekckboxValik(){

    let vastus3 = document.getElementById("vastus3");
    let vorkpall=document.getElementById("vorkpall");
    let korvpall=document.getElementById("korvpall");
    let jalgpall=document.getElementById("jalgpall");
    let ujumine=document.getElementById("ujumine");
    let tantsid=document.getElementById("tantsid");


    let sport="";
    if(vorkpall.checked){
        sport+=vorkpall.value+", " ;
    }
    if(korvpall.checked){
        sport+=korvpall.value+", " ;
    }
    if(jalgpall.checked){
        sport+=jalgpall.value+", " ;
    }
    if(ujumine.checked){
        sport+=ujumine.value+", " ;
    }
    if(tantsid.checked){
        sport+=tantsid.value+", " ;
    }
    vastus3.innerHTML="sinu lemmik sport "+sport;
}