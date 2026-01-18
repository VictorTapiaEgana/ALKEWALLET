//validar email
function ValidarCorreo(correo){      
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(correo)
}   

document.addEventListener("DOMContentLoaded", () => {    

  btnLogin.addEventListener('click', (e) => {

    e.preventDefault();    

    var validado = true

    if (!ValidarCorreo($('#email').val())){      

      $('#errorCorreo').html('Ingrese un correo electrónico válido.')
       validado = false 

    }else{

      $('#errorCorreo').html('')

    }    

    if($('#password').val().length < 3){

      $('#errorContraseña').html('Ingrese minimo 3 caracteres')
      validado =  false  

    }else{

      $('#errorContraseña').html('')

    }

    if (validado){
      window.location.href = 'menu.html'
    }

 })

})


