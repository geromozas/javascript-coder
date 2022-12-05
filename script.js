let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let cuentaBancaria = 0;
let cantidadExtracciones = 0;

function acciones(){
    let accion= Number(prompt("Que desea hacer? 1-Ver monto 2-Depositar 3-Extraer"))

    switch (accion) {
        case 1:
            alert(cuentaBancaria)
            break;
        case 2:
            let deposito= Number(prompt("Ingrese cantidad a depositar"))
            cuentaBancaria += deposito
            console.log(cuentaBancaria);
            break;
        case 3:
            let extraccion = Number(prompt("Ingrese cantidad a extraer"))
            if(extraccion > cuentaBancaria){
                alert('No tiene esa cantidad de dinero en cuenta')
            }else{
                cuentaBancaria = cuentaBancaria - extraccion;
                cantidadExtracciones = cantidadExtracciones + 1
                for (let i = 0; i < cantidadExtracciones; i++) {
                    console.log('Extraccion numero: ' + cantidadExtracciones)
                }
            }
    }
}

acciones()

let boton = document.getElementById('ejecutar');
boton.addEventListener('click', acciones)