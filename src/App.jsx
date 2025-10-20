// rafce
//Un componente es una funcion, para que esa funcion se pueda usar en otro lado tengo que exportarla
// si la exporto creo un modulo

import { Fragment } from "react"
import TituloPrincipal from "./components/TituloPrincipal"
import TituloSecundario from "./components/TituloSecundario"
import Parrafo from "./components/Parrafo"
import datosParrafos from "./constants/datos-parrafos"

// handle-http.js <-- modulo de js
// App.jsx <--- Si trabajo con componentes, utilizo mayusculas
// TituloPrincipal <--- Se usa upperCammelCase
//Hook personalizados
//useNombreHook

 

const App = () => {
   // https://es.wikipedia.org/wiki/JSX_(JavaScript)
  // https://legacy.reactjs.org/docs/introducing-jsx.html
  // https://react.dev/learn/writing-markup-with-jsx

  // * Lo que retornan las funciones (componentes) no es HTML es JSX -> Javascript + XML (Extension de JS) <--- Facebook(Meta)
  // * JSX -> Fragment -> <></>
  // * JSX -> Fragment -> <Fragment></Fragment>



  return (
      <>
        <TituloPrincipal /> {/* Cierre en la etiqueta de apertura */}
        
        <TituloSecundario texto="Título Secundario" nro="1" color="crimson"></TituloSecundario> {/* Etiqueta apertura y etiqueta cierre */}

        <Parrafo texto={datosParrafos[0].texto} numero={datosParrafos[0].numero} />

        <TituloSecundario texto="Titulo Secundario" nro="2" color="violet" /> 

        <Parrafo texto={datosParrafos[1].texto} numero={datosParrafos[1].numero} />

        <TituloSecundario texto="Titulo Secundario" nro="3" color="lightblue" />

        <Parrafo texto={datosParrafos[2].texto} numero={datosParrafos[2].numero} />

        <TituloSecundario texto="Titulo Secundario" nro="4" color="lightgreen" />
      </>
    )
}


export default App
