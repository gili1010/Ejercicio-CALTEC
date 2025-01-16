Automation PLAYWRIGHT - EJERCICIO DE AUTOMATIZACIÓN - Caltec

Sobre el proyecto
El proyecto esta basado en Microsoft Playwright para end-to-end testing. 

Construido con
Playwright
Typescript

Recomendaciones
IDE:
Visual Studio Code

Project structure
.
├── allure-reports
├── allure-results
├── Browser
│   ├── BrowserManager
├── node_modules
├── pages
│   ├── Hooks
│   │   ├── hooks.ts
│   ├── locators
│   │   ├── meliLocators.ts
│   └── BasePage.ts
│   └── MeliPage.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md

Inicio
Debes tener instalado

NodeJS:
  https://nodejs.org/en/download/
Java 8 or higher:
  https://www.java.com/es/download/

Instalación
Clonar el repositorio

Instalar paquetes y dependencias

npm i
instalar Playwright:
 -npx playwright install
verificar la instalacion con:
npm run test

Configuración
Modificar PRECIOMIN, PRECIOMAX y Browser desde .env

Comandos
Run test
 -npm run test1 => Ejercicio 1
 -npm run test2 => Ejercicio 2

Generar reporte
 -npm run report
Abrir reporte
 -npm run open
Generar codigo codegen
 -npm run code
para modificar el navegador:
npm run test1 --BROWSER="VALOR" Los valores pueden ser chrome, firefox o webkit
npm run test2 --BROWSER="VALOR" Los valores pueden ser chrome, firefox o webkit

Reportes
Allure report

Credits
    https://github.com/gili1010