const arrayTransacciones = [
  {
    nombre:'Juan Rojas',
    banco:'ITAU',
    monto:'15.000'
  },
  {
    nombre:'Carolina Jorquera',
    banco:'BCI',
    monto:'45.000'
  },
  {
    nombre:'Eduardo Nuñez',
    banco:'B-CHILE',
    monto:'8.000'
  }
]

document.addEventListener('DOMContentLoaded',() => {

  var tabla = $('#tableBody')
  var fila =''

  arrayTransacciones.map((data,index) =>{
      fila += `<tr>
                  <th scope="col">${ index + 1 }</th>
                  <th scope="col">${ data.nombre }</th>
                  <th scope="col">${ data.banco }</th>
                  <th scope="col">${ data.monto }</th>
                </tr>                
                `
    })

  tabla.html(fila)

})