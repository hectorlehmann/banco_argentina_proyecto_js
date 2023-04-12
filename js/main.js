/*let continuar = true
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
}*/

//usando funcion constructor--------------------------------------------------------------

const personas = []

const ingresoPersona = () =>{
    const nombre = prompt("ingrese nombre")
    const apellido = prompt("ingrese apellido")
    
    let dni
    do {
        dni = parseInt(prompt("ingrese dni"))
    } while (isNaN(dni))

    personas.push({
        nombre : nombre,
        apellido : apellido,
        dni : dni
    })
}
let continuar = true

let preguntaInicio 
do {
    preguntaInicio = prompt("buenos dias, quiere iniciar el simulador? \nsi \nno")
}while(preguntaInicio != "si" && preguntaInicio != "no")

switch(preguntaInicio){
    case "si":
        ingresoPersona()
        break
    case "no":
        continuar = false
        break
    default:
        alert("error")
}


while(continuar){
    
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


let nuevaPregunta =true
nuevaPregunta = confirm("¿desea informacion de las distintas cotizaciones?")

const euro =[
    {
        nombreE : "Euro",
        compraE : "223,55",
        ventaE : "232,32"
    },]
    
const dolar  = [ {
        nombreD : "Dolar",
        compraD : "208,15",
        ventaD : "217,15"
    }
]      

const dolarBlue = [
    {
        nombreDb : "Dolar blue",
        compraDb : "388,00",
        ventaDb : "392,00"
    }
]

const fecha = new Date()

const verDolar = () =>{
    dolar.forEach((el) =>{
        alert(fecha.toLocaleString() + "\nDivisa: " + el.nombreD + "\nCompra: " + el.compraD + "\nVenta: "+ el.ventaD)
    })
}

const verEuro = () =>{
    euro.forEach((el) => {
        alert(fecha.toLocaleString() + "\nDivisa: " + el.nombreE + "\nCompra: " + el.compraE + "\nVenta: "+ el.ventaE)
        })
}

const verDolarBlue = () =>{
    dolarBlue.forEach((el) => {
        alert(fecha.toLocaleString() + "\nDivisa: " + el.nombreDb + "\nCompra: " + el.compraDb + "\nVenta: "+ el.ventaDb)
    })
}
let repetir = true
while(nuevaPregunta){
    
    while(repetir){
        let divisa
    do {
       divisa = prompt("Elija divisa: dolar , euro o blue")
    } while (divisa != "dolar" && divisa != "euro" && divisa != "blue"); 
    
    switch(divisa){
        case "dolar":
            verDolar()
            break
        case"euro":
            verEuro()
            break
        case "blue":
            verDolarBlue()
            break
        default:
            alert("error")
    }
    repetir = confirm("desea informacion de otra divisa?")
    
    
    
    }alert("muchas gracias")
    break
    
}
alert("muchas gracias")





/*class Persona{
    constructor(nombre,apellido,email){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
    }
}
const datos = new Persona(prompt("Ingrese nombre"),prompt("Ingrese apellido"),prompt("Ingrese email"))
console.log(datos.nombre)
console.log(datos.apellido)
console.log(datos.email)*/