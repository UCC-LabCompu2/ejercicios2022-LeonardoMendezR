/*
 * Conversion de unidades
 * @method cambiar_unidades
 * @param (string) id
 * @param (number)valor
 */

function cambiar_unidades(id,valor){
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido");        
        document.lasunidades.unid_metro.value="" ;
        document.lasunidades.unid_pie.value="" ;
        document.lasunidades.unid_pulgada.value="" ;
        document.lasunidades.unid_yarda.value="" ;
    
    }
    else if(id=="metro"){
        document.lasunidades.unid_pulgada.value=39.3701 * valor;
        document.lasunidades.unid_pie.value= 3.281* valor;
        document.lasunidades.unid_yarda.value= 1.094* valor;
    }
    else if(id=="pulgada"){
        document.lasunidades.unid_metro.value=valor / 39.37 ;
        document.lasunidades.unid_pie.value= valor/12;
        document.lasunidades.unid_yarda.value= valor/36;
            
    }
    else if(id=="pie"){
        document.lasunidades.unid_metro.value= valor/3.281;
        document.lasunidades.unid_yarda.value= valor/3;
        document.lasunidades.unid_pulgada.value= valor*12;
        
        
    }
    
    else if (id=="yarda"){
        document.lasunidades.unid_metro.value=valor/1.094;
        document.lasunidades.unid_pie.value=valor*3;
        document.lasunidades.unid_pulgada.value= valor*36;
    }
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
    document.getElementsByName("sum_total")[0].value=num1+num2;
}
function calcularResta(){
    var num1,num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].value=num1-num2;
    
}
function calcularMult(){
    var num1,num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].value=num1*num2;

}
function calcularDiv(){
    var num1,num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].value=num1/num2;

}