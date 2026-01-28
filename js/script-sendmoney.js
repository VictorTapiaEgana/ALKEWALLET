let arrayClientes = JSON.parse(localStorage.getItem('arrayClientes')) || [];

const Clientes = [
  {
    label:'Juan Rojas - ITAU',
    value:'Juan Rojas',
  },
  {
    label:'Carolina Jorquera - BCI',
    value:'Carolina Jorquera',
  },
  {
    label:'Eduardo Nuñez - CHILE',
    value:'Eduardo Nuñez',
  },
]

if (arrayClientes.length === 0) {
    arrayClientes.push(...Clientes);
}

localStorage.setItem('arrayClientes', JSON.stringify(arrayClientes));

function cargarDatos() {
   let Fila ='';
   
   arrayClientes.forEach(cliente => {
    
    
     Fila += `<tr>
                <th scope="row">1</th>
                <td>${cliente.value}</td>
                <td>${cliente.label.split(' - ')[1]}</td>                
              </tr>`;
   });
   
   $('#tableBody').html(Fila);
}

function guardarContacto() {

  let Contacto = $('#inputContacto').val();
  let Banco = $('#inputBanco').val();

  if (Contacto && Banco) {
    arrayClientes.push({
                        label: `${Contacto} - ${Banco}`,
                      value: Contacto,
    })

    $('#inputNombre').autocomplete({
      source: arrayClientes
    })  

   cargarDatos()

   $('#inputContacto').val('')
   $('#inputBanco').val('')

   $('#ModalContactos').modal('hide')

  }else{

      $('#error').html('Ingrese un nombre y banco')
    
  }

}

$(document).ready(function () {
  
    cargarDatos()

    $('#inputNombre').autocomplete({
      source: arrayClientes
    })  

    // BOTON ENVIAR
  $('#btnEnviar').click(function() {

      let validar = true;
      const regex = /^\d+$/;

      if ($('#inputNombre').val() === '' || $('#inputNombre').val().lenght > 6 ){

        $('#errorNombre').html('Ingrese un nombre valido')
        validar=false

      }else{

        $('#errorNombre').html('')

      }

      if (!regex.test($('#inputTransaction').val())) {

          $('#errorDinero').html('Ingrese un monto valido o mayor a cero')
          validar=false

      }else{

          $('#errorDinero').html('')

      }

      if(validar){

        // GUARDAR EL MOVIMIENTO
        let Movimientos = {};

        nombreABuscar = $('#inputNombre').val();

        const resultado = $.grep(arrayClientes, function(cliente) {
          return cliente.value === nombreABuscar;
        });        

        let banco = resultado[0].label.split('-')[1].trim();       

        Movimientos = {
          nombre: $('#inputNombre').val(),
          banco: banco,  
          monto: parseInt($('#inputTransaction').val()),          
          Movimiento: 'Transfer.'
        }

        arrayMovimientos = JSON.parse(localStorage.getItem('arrayMovimientos')) || [];
        arrayMovimientos.push(Movimientos);
        localStorage.setItem('arrayMovimientos', JSON.stringify(arrayMovimientos));

        // ACTUALIZAR EL SALDO
        let saldoNuevo = Number(localStorage.getItem('saldo')) - Number($('#inputTransaction').val());
        localStorage.setItem('saldo', saldoNuevo);

        // MOSTRAR EL TOAST
        toastLiveExample = document.getElementById('liveToast')

        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)      

        $('#ToastMsg').html(`Transferido $${Number($('#inputTransaction').val()).toLocaleString('es-CL')} a:<strong> ${$('#inputNombre').val()}</strong>`)
        toastBootstrap.show()

        $('#inputNombre').val('') 
        $('#inputTransaction').val('') 

      }

  })

});