/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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
        document.lasunidades.unid_pie.value= 3.28084* valor;
        document.lasunidades.unid_yarda.value= 1.09361* valor;
    }
    else if(id=="pulgada"){
        document.lasunidades.unid_metro.value=valor / 39.3701 ;
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