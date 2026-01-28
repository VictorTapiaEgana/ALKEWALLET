let arrayTransacciones = JSON.parse(localStorage.getItem('arrayMovimientos')) || [];

if (arrayTransacciones.length === 0) {
  $('#tablaDatos').html('<tr><td colspan="5" class="text-center fw-bold text-dark">No hay movimientos</td></tr>')
}

$(document).ready(function () {

  var tabla = $('#tableBody')
  var fila =''

  arrayTransacciones.map((data,index) =>{

      fila += `<tr>
                <td>${ index + 1 }</td>
                <td>${ data.nombre }</td>
                <td>${ data.banco }</td>
                <td class="${data.Movimiento == 'Abono' 
                            ? 'text-Abono' 
                            : 'text-Transferencia'}">${ data.monto.toLocaleString('es-CL') }</td>
                <td> 
                  <span class="badge rounded-pill ${data.Movimiento == 'Abono' 
                                                    ? 'bg-success' 
                                                    : 'bg-danger'}">${data.Movimiento}</span>  
                </td> 
              </tr>`
      })

  tabla.html(fila)
  
})