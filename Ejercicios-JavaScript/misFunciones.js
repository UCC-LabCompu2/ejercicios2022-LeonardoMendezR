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