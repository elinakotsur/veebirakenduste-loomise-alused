function kustuta(){
    const puhi=document.getElementById("puhi");
    if(puhi.getContext) {
        let p = puhi.getContext("2d");
        p.clearRect(0, 0, 400, 300);
    }
}
function maja(){
    const puhi=document.getElementById("puhi");
    if(puhi.getContext) {
        let p = puhi.getContext("2d");
        p.fillStyle = "#853131";
        p.fillRect(180, 160, 167, 127);


        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(270, 50);
        p.lineTo(140,160);
        p.lineTo(370,160);
        p.lineTo(270, 50);
        p.strokeStyle="#b30000";
        p.stroke(); //ümberjoo
        p.fillStyle = "#b30000";
        p.fill();




        //aken
        p.beginPath();
        p.arc(260, 100, 20,0, 2*Math.PI,true)
        p.strokeStyle="#586e9c";
        p.stroke(); //ümberjoon
        p.fillStyle="#b6bdca";
        p.fill();




    }

}

function paike() {
    const puhi = document.getElementById("puhi");
    if (puhi.getContext) {
        let p = puhi.getContext("2d");
        //paike

        p.beginPath();
        p.arc(350, 50, 30,0, 2*Math.PI,true)
        p.strokeStyle="#c5711b";
        p.stroke(); //ümberjoon
        p.fillStyle="#f1c926";
        p.fill();

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(300, 40);
        p.lineTo(260,40);
        p.strokeStyle="#c5711b";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(310, 60);
        p.lineTo(270,70);
        p.strokeStyle="#c5711b";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(320, 80);
        p.lineTo(280,100);
        p.strokeStyle="#c5711b";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(335, 90);
        p.lineTo(310,130);
        p.strokeStyle="#c5711b";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(355, 90);
        p.lineTo(345,130);
        p.strokeStyle="#c5711b";
        p.stroke(); //ümberjoo
    }

}
function puu() {
    const puhi = document.getElementById("puhi");
    if (puhi.getContext) {
        let p = puhi.getContext("2d");
        p.fillStyle = "#853131";
        p.fillRect(30, 120, 167, 127);

    }
}