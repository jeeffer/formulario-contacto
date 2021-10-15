function click_boton()
{
    let name = document.getElementById("nombre").value;  
    registrar_campo(name, "nombre"); 
    
    let email = document.getElementById("email").value;
    checkEmail(email);    

}

function registrar_campo(campo, ref_campo) {
    let verificacion = validar_texto(campo);    
    if (verificacion == 1){
        alert("El campo " + ref_campo + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + ref_campo + " no admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + ref_campo + " debe contener entre 4 y 20 caracteres");
    }
    else if (verificacion == 4){
        alert("El campo " + ref_campo + " no se puede dejar vacío");
    }
}


function validar_texto(campo){
    let array_campo = Array.from(campo);
    let verificacion = 1;
    if (campo != "") {
        if (array_campo.length <= 20 && array_campo.length >= 4) {
            for(let i=0; i<array_campo.length; i++)
            {
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){  
                    verificacion = 2;
                    i = array_campo.length;                  
                }
            }
        }
        else
        {
            verificacion = 3;
        }       
    }
    else
    {
        verificacion = 4;       
    }
    return verificacion;
}

function registrar_correo(campo, ref_campo){
    let verificacion = validar_correo(campo);
    if ( verificacion == 1){
        return true;
    }    
    else if (verificacion == 2)
    {
        alert("Error: en el campo " + ref_campo + " debe utilizarse la siguiente estructura: usuario@correo.com");
        return false;
    }
    else if (verificacion == 3)
    {
        alert("Error: el campo " + ref_campo + " no puede dejarse vacío");
        return false;
    }
}

function validar_correo(campo){
    let array_campo = Array.from(campo);
    let arroba = 0;
    let punto = 0;
    let com = 0;
    let verificacion;
    if (campo != "") {
        for (let i=0; i<array_campo.length; i++){
            if(array_campo[i] == '@' || arroba == 1){
                arroba = 1;
                if(array_campo[i] == '.' || punto == 1){
                    if(array_campo[i+1] == 'c' && array_campo[i+2] == 'o' && array_campo[i+3] == 'm'){
                        com = 1;
                        i = array_campo.length;
                        verificacion = 1;
                    }                
                }               
            }  
        }
        if (com == 0){
            verificacion = 2;
        }
    }
    else {
        verificacion = 3;       
    }
    return verificacion;
}











