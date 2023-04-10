import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import QuienesSomos from './components/QuienesSomos/QuienesSomos.jsx';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './components/Inicio/Inicio.jsx';
import Rescatados from './components/Rescatados/Rescatados.jsx';
import Requisitos from './components/Requisitos/Requisitos.jsx';
import Castracion from './components/Castracion/Castracion.jsx';
import Donaciones from './components/Donaciones/Donaciones.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Razas from './components/api/razas.jsx';

const AppContext = React.createContext();
function App() {
  const contextValue = { basename: '/' };
  return (
    <main className="App">
      <BrowserRouter basename={contextValue.basename}>
      <AppContext.Provider value={contextValue}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Razas' element={<Razas/>}/>
          <Route path='/QuienesSomos' element={<QuienesSomos/>} />
          <Route path='/Rescatados' element={<Rescatados/>} />
          <Route path='/Requisitos' element={<Requisitos/>} />
          <Route path='/Castracion' element={<Castracion />} />
          <Route path='/Donaciones' element={<Donaciones />} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
        <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;