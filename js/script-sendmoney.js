const arrayClientes = [
  {
    label:'Juan Rojas - ITAU',
    value:'Juna Rojas',
  },
  {
    label:'Carolina Jorquera - BCI',
    value:'Carolina Jorquera',
  },
  {
    label:'Eduardo Nuñez - B-CHILE',
    value:'Eduardo Nuñez',
  },
]

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



document.addEventListener('DOMContentLoaded',() => {

  cargarDatos()

  $('#inputNombre').autocomplete({
    source: arrayClientes
  })  

  // BOTON ENVIAR
  btnEnviar.addEventListener('click',()=>{

    var validar = true;
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

      toastLiveExample = document.getElementById('liveToast')

      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)      

      $('#ToastMsg').html(`Transferido $${Number($('#inputTransaction').val()).toLocaleString('es-CL')} a:<strong> ${$('#inputNombre').val()}</strong>`)
      toastBootstrap.show()

      $('#inputNombre').val('') 
      $('#inputTransaction').val('') 

    }

  })  







})