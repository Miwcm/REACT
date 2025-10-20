import { StrictMode } from 'react' /*libreria core (corazon) */
import { createRoot } from 'react-dom/client' /*Libreria adaptador, adapta el uso de REACT al DOM */ // react-native es para apps móviles
import './index.css' // CSS para toda la aplicacion. Pero todos los CSS van a impactar en principio sobre toda la aplicacion, para evitar eso se trabaja con CSS modules
import App from './App.jsx' // Primer componente de una app react. Un archivo, un  componente

// ! Punto de montaje de la aplicacion react
createRoot(document.getElementById('root')).render( // es mas optimo usar getElementById porque busca solo el nodo con ese ID
  <StrictMode>
    <App />
  </StrictMode>,
)
