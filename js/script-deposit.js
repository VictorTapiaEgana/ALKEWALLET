document.addEventListener("DOMContentLoaded", (event) => {

  const toastTrigger = document.getElementById('btnConfirmar')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
      
    })

    toastTrigger

  }

})