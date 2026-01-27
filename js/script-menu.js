const SaldoInicial = localStorage.getItem('saldo') || 100000;

$('#saldoActual').text(`$ ${SaldoInicial.toLocaleString()}`);