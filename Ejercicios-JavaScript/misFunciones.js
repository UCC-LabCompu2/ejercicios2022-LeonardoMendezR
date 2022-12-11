/*
 * Conversion de unidades
 * @method cambiar_unidades
 * @param (string) id
 * @param (number)valor
 */

function cambiar_unidades(id,valor){
    var metro,pulgada,pie,yarda;
    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido"+id);           
        metro="";
        pulgada="";
        pie="";
        yarda="";
    }
    else if(id=="metro"){
        metro=valor;
        pulgada=39.3701 * valor;
        pie= 3.281* valor;
        yarda= 1.094* valor;
    }
    else if(id=="pulgada"){
        pulgada=valor;
        metro=valor / 39.37 ;
        pie= valor/12;
        yarda= valor/36;
            
    }
    else if(id=="pie"){
        pie=valor;
        metro= valor/3.281;
        yarda= valor/3;
        pulgada= valor*12;
        
        
    }
    
    else if (id=="yarda"){
        yarda=valor;
        metro=valor/1.094;
        pie=valor*3;
        pulgada= valor*36;
    }
    document.lasunidades.unid_metro.value=Math.round(metro*100)/100;
    document.lasunidades.unid_pie.value=Math.round(pie*100)/100;
    document.lasunidades.unid_pulgada.value=Math.round(pulgada*100)/100;
    document.lasunidades.unid_yarda.value=Math.round(yarda*100)/100;;
}
function convertirGR(id){
    var grad,rad;
    if (id=="grados") {
        grad = document.getElementById("grados").value;
        rad=(grad * Math.PI)/180;
    }
    else if (id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI;
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}
function mostrar_ocultar(ValorMO){
    if(ValorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';

    }
    else if(ValorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}
function calcularSuma(){
    var num1,num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML=num1+num2;
}
function calcularResta(){
    var num1,num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1-num2;
    
}
function calcularMult(){
    var num1,num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML=num1*num2;

}
function calcularDiv(){
    var num1,num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML=num1/num2;

}
function cargarweb(){
    var cant,unidad,urlComp;

    cant=document.getElementById("distancia").value;
    unidad=document.getElementsByName("unidades")[0].value;
    urlComp="segundaWeb.html#"+cant+"#"+unidad;
    window.open(urlComp);
}
function cargarResultado(){
    var urlComp,cant,un;

    urlComp=window.location.href.split("/")[5];
    cant= urlComp.split("#")[1];
    un= urlComp.split("#")[2];
    document.getElementById("dist").value= cant + " "+un;
}
function guardarlocalstorage(){
    let distancia,unidad;
    distancia=document.getElementById('distancia').value;
    unidad=document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS",distancia);
    localStorage.setItem("unidadesLS",unidad);

    window.open('segundaWeb.html');
}
function cargarlocalstorage(){
    let cant,un;
    cant=localStorage.getItem("distanciaLS");
    un=localStorage.getItem("unidadesLS");

    document.getElementById("dist").value=cant+ " "+ un;
}
function dibujarCC(){
    var canvas= document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    var yMAx= canvas.height;
    var xMAx= canvas.width;
    var margen=5;
    ctx.fillStyle="#35555";
    ctx.fillRect(0+margen,yMAx-40-margen,40,40);


    ctx.arc(xMAx/2,yMAx/2,40,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx =canvas.getContext("2d");
    var posX=event.clientX;
    var posY=event.clientY;
    console.log(posX, posY);
    canvas.onmousedown=function(){bandera=true};
    canvas.onmouseup=function(){bandera=false};
    if(bandera){
        ctx.fillRect(posX,posY,5,5);
        ctx.fill;
    
    }
}
function limpiarCanvas(){
    
    var canvas = document.getElementById("canvasAdibujar");
    var ctx =canvas.getContext("2d");

    canvas.width = canvas.width;
}
function dibujarcuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var anchoMax= canvas.width;
    var alturaMax=canvas.height;
    //dibujar lineas horizontales
    ctx.beginPath();
    for(var i=0;i<alturaMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(1000,i);
        ctx.strokestyke="#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
    //dibujar lineas verticales
    ctx.beginPath();
    
    for(var i=0;i<anchoMax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,1000);
        ctx.strokestyke="#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
    
}
function dibujarImagen(posX, posY){
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");
    console.log(posX,posY);
    var img=new Image();
    img.src="images/auto.png";
    canvas.width=canvas.width;
    img.onload=function(){
        ctx.drawImage(img,posX,posY);
    }
}
x=0;
dx=2;
function animarAuto(){
    
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");
    
    canvas.width=canvas.width;

    var img=new Image();
    img.src="images/auto.png";
    
    img.onload=function(){
        ctx.drawImage(img,x,100);
    }
    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}