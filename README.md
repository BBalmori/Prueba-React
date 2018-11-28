# Prueba-React

1º He instalado node.js, git y yarn
2º yarn add global create-react-App
3º yarn create react-app my-App
4º yarn start (Inicio la app que se abre en el servidor http://localhost:3000)
Cosas a saber:
  src/index.js puente entre React y HTML de la pág. En él, se renderiza el
  componente App (el componente principal de nuestra aplicación) en el elemento
  con id=“root” de index.html , y dentro de él, todos los componentes que se
  definan.
5º Integrar Redux: Maneja el estado y la lógica de nuestras app. Instalamos
yarn add react-Redux
6º Creamos carpeta redux en src.
7º Dentro de redux creamos ReduxProvider.js (código pdf)
Cosas a saber:
  ReduxProvider.js puente entre Recct y Redux.
8º Hay que rellenar el metodo mapStateToProps de App.js
9º Creamos fichero reducers.js dentro de la carpeta redux
10º Creamos actions.js en redux pero vacio.

11º Definimos el estado de nuestra app en ReduxProvider.js, en el constructor,
dentro de this.initialState como en el pdf
12º Importamos los datos de las preguntas del quiz. Creamos dentro de
src/assets el fichero mock-data.js y descargamos del moodle
13º En ReduxProvider.js lo importamos
14º Escribimos un reducer para cada parte del estado en el fichero reducers.js
(codigo del pdf)
15º Al probar la app no funciona, porque creo que falta código
