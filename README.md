# AppSenegocia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

Llegar y usar, inicia el siguiente comando `npm install` y luego `ng serve`

Usar angular/cli 7.3.3 y nodejs 11.9.0, junto con npm 6.8

## Paquetes Utilizados

`bootstrap 4` -> `npm install --save bootstrap`  
`font awesome` -> `npm install --save font-awesome`  
`ngx-bootstrap` -> `npm install --save ngx-bootstrap` 

Agregar, si faltan, las siguientes lineas en `styles` del archivo `angular.json`  
`"node_modules/bootstrap/dist/css/bootstrap.min.css"`    
`"node_modules/font-awesome/css/font-awesome.css"`

## Consideraciones

El proyecto tiene dentro de la carpeta `components`, las siguiente carpetas que lo conforman `component1`, `component2`, `component3`, `modals`
Además tiene `classes` : las clases utilizadas, segun el modelo de datos que venga del servicio web  
`services`: servicios utilizados  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
