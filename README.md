# Proyecto: Alke Wallet

El objetivo de nuestro proyecto "Alke Wallet" es desarrollar una aplicación de
billetera digital que permita a los usuarios gestionar sus activos financieros de
manera segura y conveniente.






## Tecnologias

[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#) [![jQuery](https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=fff)](#) [![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)](#) [![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff)](#)

Ademas del uso de las Tecnologias ya nombradas, su hace uso de localStorage para almacenar saldos, contactos y movimientos dentro de la app.


## Instalacion local

Para ejecutar en local clonar el repositorio, y ejecutar la extencion Liveserver

```bash
  git clone https://github.com/VictorTapiaEgana/ALKEWALLET.git
```


## Prueba en produccion

La aplicacion se encuentra hosteada en[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](#)

https://alkewallet.vercel.app/


## Manuel de uso

### 1-. Pantalla de bienvenida y Login:
Use las siguientes credenciales para iniciar secion:

User: admin@wallet.cl  
Pass: admin

![App Screenshot](https://raw.githubusercontent.com/VictorTapiaEgana/ALKEWALLET/refs/heads/master/images/patanalla-index.png)![App Screenshot](https://raw.githubusercontent.com/VictorTapiaEgana/ALKEWALLET/refs/heads/master/images/pantalla-login.png)

### 2-. Menu

Muestra las opciones disponibles en el menu superior y el saldo inicial de la cuenta.

![App Screenshot](https://raw.githubusercontent.com/VictorTapiaEgana/ALKEWALLET/refs/heads/master/images/pantalla-incio.png)

### 3-. Depocitar

Mustra el saldo actual y la opcion de generar un Abono a la cuenta.

![App Screenshot](https://raw.githubusercontent.com/VictorTapiaEgana/ALKEWALLET/refs/heads/master/images/pantalla-depocitar.png)

### 4-. Enviar

Permite trasnferir dinero a alguno de los contactos, el campo   
"Nombre destinatario" tiene autocompletado en base a los contactos agregados.

Tambien se puden agregar contactos nuevos para luego poser trasnferirles dinero.

![App Screenshot](https://raw.githubusercontent.com/VictorTapiaEgana/ALKEWALLET/refs/heads/master/images/pantalla-sendmoney.png) ![App Screenshot](https://raw.githubusercontent.com/VictorTapiaEgana/ALKEWALLET/refs/heads/master/images/pantalla-guardracontacto.png)


### 5-. Transacciones

La pantalla de transacciones muestra un detalle de los Abonos y transacciones realizados

![App Screenshot](https://raw.githubusercontent.com/VictorTapiaEgana/ALKEWALLET/refs/heads/master/images/pantalla-transacctions.png)




## Desarrollo de GIT

Se crearon 6 ramas durante el desarrollo del Proyecto

![Branches](https://raw.githubusercontent.com/VictorTapiaEgana/ALKEWALLET/refs/heads/master/images/brabches.png)

## Estructura del Proyecto

```
└── 📁Alke Wallet    
    └── 📁css
        ├── bootstrap.min.css
        ├── deposit.css
        ├── index.css
        ├── login.css
        ├── menu.css
        ├── sendmoney.css
        ├── transactions.css
    └── 📁images
        ├── avatar.webp
        ├── deposit.png
        ├── img-menu.png
        ├── main.png
        ├── pantalla-depocitar.png
        ├── pantalla-guardracontacto.png
        ├── pantalla-incio.png
        ├── pantalla-sendmoney.png
        ├── pantalla-transacctions.png
        ├── transaction.png
    └── 📁js
        ├── bootstrap.bundle.min.js
        ├── jquery-3.7.1.min.js
        ├── script-deposit.js
        ├── script-index.js
        ├── script-login.js
        ├── script-menu.js
        ├── script-sendmoney.js
        ├── script-transactions.js
    └── 📁pages
        ├── deposit.html
        ├── login.html
        ├── menu.html
        ├── sendmoney.html
        ├── transactions.html   
    ├── index.html
    └── README.md
```

