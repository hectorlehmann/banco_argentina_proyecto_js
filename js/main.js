

swal.fire({
    title: 'Ofertas increibles!!!',
    text: '¿Queres recibir estas ofertas y muchos otros descuentos con nuestra tarjeta?',
    imageUrl: './assets/Imagenes/menu/alerta.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    confirmButtonText: 'Si, quiero!!',
    cancelButtonText: 'No, gracias',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonColor : 'blue',
    color : 'white',
    background :'#7baee9' ,
    

}).then((resultado) =>{
    if(resultado.isConfirmed){
        const { value: email } = Swal.fire({
            title: 'Por favor, introduzca su email',
            input: 'email',
            inputLabel: 'En unos pocos minutos recibiras un mail de confirmacion',
            inputPlaceholder: 'E-mail',
            confirmButtonColor : 'blue',
            color : 'black',
            confirmButtonText: 'Enviar',
          })
          
          if (email) {
            Swal.fire(`Entered email: ${email}`)
          }
         
    }
    
})


const datosClientes = []
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (elemento) => {
    elemento.preventDefault()
    const datos = {
        nombre: elemento.target.children["nombre"].value,
        apellido: elemento.target.children["apellido"].value,
        documento: elemento.target.children["documento"].value,
        monto: elemento.target.children["monto"].value,
        dias: elemento.target.children["dias"].value

    }
    
    datosClientes.push(datos)
    simular()
    localStorage.setItem("datosClientes", JSON.stringify(datosClientes))
    formulario.reset()
    console.log(datosClientes)

})

const interes = 0.91
const montoTotal = document.getElementById("montoTotal")
const ganancia = document.getElementById("ganacia")


const simular = () => {

    const monto = parseInt(document.getElementById("monto").value)
    const dias = document.getElementById("dias").value

    
    
    let resultado = 0
    switch (dias) {
        case "30":
            resultado = (monto * interes) / 12 + monto
            montoTotal.value = "$" + resultado
            ganancia.value = "$" + (resultado - monto)
            break
        case "60":
            resultado = (monto * interes) / 6 + monto
            montoTotal.value = "$" + resultado
            ganancia.value = "$" + (resultado - monto)
            break
        case "90":
            resultado = (monto * interes) / 4 + monto
            montoTotal.value = "$" + resultado
            ganancia.value = "$" + (resultado - monto)
            break
        case "180":
            resultado = (monto * interes) / 2 + monto
            montoTotal.value = "$" + resultado
            ganancia.value = "$" + (resultado - monto)
            break
        default:
            console.log("Error en la operacion")

    }
}

const mostrarFormulario = () =>{
    document.getElementById("segundoformulario").style.display = "flex"
}

const botonLink = () =>{
    location.href = "https://www.dolarsi.com/"
}



const fecha = new Date()

const verdivisas = async () => {
    const contenedorDivisas = document.getElementById("contenedorDivisas")
    
    try{
        const resp = await fetch("./js/divisas.json")
        const divisa = await resp.json()
        divisa.find((el) => {
            const tarjetaDivisas = document.createElement("div")
            tarjetaDivisas.className = "tarjetaEstiloDivisas"
            tarjetaDivisas.innerHTML = `
                                        ${fecha.toLocaleString()}
                                        <h3>${el.nombre}</h3>
                                        <p>Compra:  ${el.compra}</p>
                                        <p>Venta:  ${el.venta}</p>
                                        
            `

        contenedorDivisas.append(tarjetaDivisas)
        localStorage.setItem("divisas", JSON.stringify(divisa))
        })
        
    }catch(error){
        console.log(error)
    }
}
verdivisas()