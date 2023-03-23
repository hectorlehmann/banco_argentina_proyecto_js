let continuar = true
while(continuar){
    let nombre = prompt("Ingrese nombre")
    let apellido = prompt("Ingrese apellido")
    let email = prompt("Ingrese e-mail")
    const interes = 0.78
    const montoInteres = (monto,interes) => monto * interes
    
    let monto
    do{
        monto = parseFloat(prompt("Ingrese monto"))
    }while(isNaN(monto))


    let plazo
    do{
        plazo = prompt("Coloque a cuantos dias quiere realizar el plazo 1) 30 2) 60 3) 90 4) 180")
    }while(plazo != "30" && plazo != "60" && plazo != "90" && plazo !="180" )

    let resultado = 0
    switch(plazo){
        case "30":
            resultado = (montoInteres(monto,interes) / 12) + monto
            alert("Total de plazo fijo con taza a 78% a 30 dias: " + resultado + "\nGanacia: " + (resultado - monto))
            break
        case "60":
            resultado = (montoInteres(monto,interes) / 6) + monto
            alert("Total de plazo fijo con taza a 78% a 60 dias: " + resultado + "\nGanacia: " + (resultado - monto))
            break
        case "90":
            resultado = (montoInteres(monto,interes) / 4) + monto
            alert("Total de plazo fijo con taza a 78% a 90 dias: " + resultado + "\nGanacia: " + (resultado - monto))
            break
        case "180":
            resultado = (montoInteres(monto,interes) / 2) + monto
            alert("Total de plazo fijo con taza a 78% a 180 dias: " + resultado + "\nGanacia: " + (resultado - monto))
            break
        default:
            resultado = "Error en la operacion"
            alert(resultado)
    
}alert("Muchas gracias")
 continuar = confirm("¿Desea realizar otra consulta?")
} 

