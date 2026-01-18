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

document.addEventListener('DOMContentLoaded',() => {
  
  var validar = true;

  $('#inputNombre').autocomplete({
    source: arrayClientes
  })  

  // BOTON ENVIAR
  btnEnviar.addEventListener('click',()=>{

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

      $('#ToastMsg').html(`Transferido ${$('#inputTransaction').val()} a: ${$('#inputNombre').val()}`)
      toastBootstrap.show()

      $('#inputNombre').val('') 
      $('#inputTransaction').val('') 

    }

  })  







})