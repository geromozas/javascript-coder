let cuentaBancaria = 0;
let cantidadExtracciones = [0];
let montosextraidos = []


function registro(){
    let usuario = {
        nombre: prompt("REGISTRANDO: Ingrese su nombre"),
        contrasenia: prompt("REGISTRANDO: Ingrese su contraseña")
    }
    return usuario
}

usuarioRegistrado = registro()

function login(){
    let datoslogin= {
        nombre: prompt("LOGIN: Ingrese su nombre"),
        contrasenia: prompt("LOGIN: Ingrese su contraseña")
    }

    while(datoslogin.nombre !== usuarioRegistrado.nombre || datoslogin.contrasenia !== usuarioRegistrado.contrasenia){
        alert('ERROR: LOS DATOS INGRESADOS NO COINCIDEN CON EL REGISTRO VUELVA A INTENTAR')
        datoslogin.nombre =  prompt("LOGIN: Ingrese su nombre")
        datoslogin.contrasenia = prompt("LOGIN: Ingrese su contraseña")
    }

    if(datoslogin.nombre === usuarioRegistrado.nombre && datoslogin.contrasenia === usuarioRegistrado.contrasenia){
        alert('BIENVENIDO');
        acciones()
    }
}

login()


function acciones(){
    let accion= Number(prompt("Que desea hacer? 1-Ver monto 2-Depositar 3-Extraer 4-Ver mayor extaccion 5-Salir"))
    while(accion != 5){

        accion = Number(prompt("Que desea hacer? 1-Ver monto 2-Depositar 3-Extraer 4-Ver mayor extaccion 5-Salir"))
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
                    montosextraidos.push(extraccion)
                    cantidadExtracciones.push(cantidadExtracciones[cantidadExtracciones.length - 1] + 1)
                    console.log('EXTRACCION NUMERO: ' + cantidadExtracciones[cantidadExtracciones.length - 1])
                }
                break;
            case 4:
                let mayorextraccion = montosextraidos.sort(function(a,b){return a - b;});
                alert(mayorextraccion[mayorextraccion.length - 1])
                break;
        }
    }
}
