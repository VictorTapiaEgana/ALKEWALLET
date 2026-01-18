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



document.addEventListener('DOMContentLoaded',()=>{

  $('#inputNombre').autocomplete({
    source: arrayClientes
  })

  

})