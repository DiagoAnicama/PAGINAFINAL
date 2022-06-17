let llamfijo=0.20;
let llamclaro=0.40;
let llammovistar=0.60;
let llamentel=1.00;

let operador=prompt(`¿A que operador llamaste?\n1.-Fijo\n2.-Claro\n3.-Movistar\n4.-Entel`);

let minhablado=parseInt(prompt(`¿Cuantos minutos duro la llamada?`));


let cfijo=parseFloat(minhablado*llamfijo);
let cclaro=parseFloat(minhablado*llamclaro);
let cmovistar=parseFloat(minhablado*llammovistar);
let centel=parseFloat(minhablado*llamentel);
if(operador==1){
    document.write(`El costo de la llamada es S/ ${cfijo}`);
}else if(operador==2){
    document.write(`El costo de la llamada es S/ ${cclaro}`);
}else if(operador==3){
   document.write(`El costo de la llamada es S/ ${cmovistar}`);
}else if(operador==4){
    document.write(`El costo de la llamada es S/ ${centel}`);
}else {
    alert("No se identifico la operadora")
}