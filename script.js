let c=0;
let x="X";
let o="O";
let v;
function tictac (button){
    button.innerHTML=x;
    if(x=="X"){
    button.className = "X";
    }
    else{
        button.className= "O";
    }
    v=x;
    x=o;
    o=v;
    c=c+1;
    let rr=resultat();
    if(rr=="Victory"){
        document.getElementById('p1').textContent=o;
        document.getElementById('p2').textContent=rr;
        var d=document.getElementById('Tab').querySelectorAll("button");
        for(i=0;i<d.length;i++){
            d[i].classList.add("desactiver");
        }
    }
    if(c==9){
        document.getElementById('p2').textContent=rr;
    }

}
function resultat(){
    let r = "Draw";
    for (let i = 0; i < 3; i++) {
        if (table(i,0) === table(i,1) && table(i,1) === table(i,2)) {
            r = "Victory";
            break;
        } else if (table(0,i) === table(1,i) && table(1,i) === table(2,i)) {
            r = "Victory";
            break;
        } else if ((table(0,0) === table(1,1) && table(1,1) === table(2,2)) || (table(0,2) === table(1,1) && table(1,1) === table(2,0))) {
            r = "Victory";
            break;
        }
    }
    return r;
}

function table(i,j){
    var T = document.getElementById("Tab");
    var boutton = T.rows[i].cells[j].querySelector("button");
    var bouttonV = boutton.innerHTML;
    return(bouttonV);    
}
