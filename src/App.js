import React from 'react';
import NavBar from './componentes/NavBar';
import Logocenter from './componentes/Logocenter'; // Importe o componente Logocenter
import styles from './componentes/NavBar.module.css'; // Importe os estilos do NavBar
import Footer from './componentes/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Passe a classe de estilos diretamente para o componente NavBar */}
      <NavBar className={styles.NavBar} />
      <Logocenter />
      <Footer/>
    </div>
  );
}

export default App;