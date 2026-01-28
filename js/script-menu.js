const SaldoInicial = parseInt(localStorage.getItem('saldo')) || 100000;

$('#saldoActual').text(`$ ${SaldoInicial.toLocaleString()}`);