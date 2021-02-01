
// funcio que calcula la diferencia de años 
export function ObtenerDifYear (year){
    return new Date().getFullYear()-year;
}

// calcula el total a pagar de segun la marca

export function calcularMarca(marca){
    let tarifa;

    switch (marca){

        case 'europeo':
            tarifa = 1.30;
            break;
        case 'americano':
            tarifa = 1.15;
            break;
        case 'asiatico':
            tarifa = 1.05;
            break;
        default:
            break;
    }

    return tarifa;

};

// funcion el tipo de seguro
export function calculaPlan (plan){
    return (plan ==='basico') ? 1.20 : 1.50;

};

//funcion que hace la primera letra mayuscula
export function primeraMayuscula(texto){
    //ponemos la primera mayucula y despues concatenamos el texto despues de la primera posicion
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

