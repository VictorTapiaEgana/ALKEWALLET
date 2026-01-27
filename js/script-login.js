//validar email
function ValidarCorreo(correo){      
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(correo)
}   

$(document).ready(function() {

  $('#btnLogin').click(function(e) {

    e.preventDefault();    

    var validado = true

    if (!ValidarCorreo($('#email').val()) || $('#email').val() === ''){      

      $('#errorCorreo').html('Ingrese un correo electrónico válido.')
       validado = false 

    }else{

      $('#errorCorreo').html('')

    }    

    if($('#password').val().length < 5){

      $('#errorContraseña').html('Ingrese minimo 5 caracteres, no se permite contraseña en blanco')
      validado =  false  

    }else{

      $('#errorContraseña').html('')

    }

   if (validado) {
    
      if ($('#email').val() === 'admin@wallet.cl' && $('#password').val() === 'admin') {

        window.location.href = 'menu.html';

      } else {
        
        toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)              
        toastBootstrap.show()

      }
    }

 })
  
})