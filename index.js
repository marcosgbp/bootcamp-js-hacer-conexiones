
function deleteConnReq(element){
    /*parentNode busca el padre del nodo actual en este caso agg 2 parenNode
     para eliminar la fila completa*/
    element.parentNode.parentNode.remove();
    //Resto el contador de Connection Requests
    let countConnReq = parseInt(document.querySelector(".card-3-noti").innerHTML)-1
    //Setteo el contador de Connection Requests
    document.querySelector(".card-3-noti").innerHTML = countConnReq;
}

function editName(){
    document.querySelector(".developer").innerHTML="Gabriel Paredes";
}

function addYourConn(element){
 /*Recibo el elemento y llamo a deleteConnReq para eliminar de Connection Requests
   y agregar en Your Connection*/
   deleteConnReq(element);
   //Sumo el contador de Your Connection
   let countYourConn=parseInt(document.querySelector(".card-4-noti").innerHTML)+1;
   //Setteo el contador de Your Connection
   document.querySelector(".card-4-noti").innerHTML=countYourConn;
}