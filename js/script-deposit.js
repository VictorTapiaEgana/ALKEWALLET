let SaldoInicial = 100000;

function RealizarDeposito(saldoNuevo) {
  
  $('#saldoActual').text(`$ ${(SaldoInicial + saldoNuevo).toLocaleString()}`);
}

document.addEventListener("DOMContentLoaded", (e) => {

  e.preventDefault();

  let BtnConfirmar = $('#btnConfirmar');

  const toastLive = document.getElementById('liveToast');

  $('#saldoActual').text(`$ ${SaldoInicial.toLocaleString()}`);

  let saldoActual = 0;

  BtnConfirmar.click(function() {

    let Validar = true;
    
    if ($('#inputCantidad').val() === '' || $('#inputCantidad').val() <= 0) {      
      $('#errorCantidad').text('Ingrese un valor mayor a $ 0');
      Validar = false;
    }

    if(Validar){
      
      saldoActual += parseInt($('#inputCantidad').val());
      // console.log(saldoActual);
      RealizarDeposito(saldoActual);     
      
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive)
      
      $('.toast-body').html(`Deposito de $ ${parseInt($('#inputCantidad').val(), 10).toLocaleString()} realizado exitosamente<br>nuevo saldo: $ ${(Number(SaldoInicial) + Number(saldoActual)).toLocaleString()} ✔` );                                     

      $('#inputCantidad').val('');
      $('#errorCantidad').text('');

      toastBootstrap.show()

    }

  });

})