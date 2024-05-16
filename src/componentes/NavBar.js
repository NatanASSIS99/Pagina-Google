import React from 'react'; // Importe o React se ainda não foi importado
import styles from './NavBar.module.css'; // Importe os estilos
import logo1 from './logo1.svg'; // Importe a imagem
import logo2 from './logo2.svg'; 

function NavBar() {
    return (
        <div>
            <ul className={styles.Navbar}> {/* Use a classe de estilos correta */}
                <li>Gmail</li>
                <li>Imagem</li>
                {/* Use a imagem dentro de um elemento <img> */}
                <img src={logo1} alt="Logo 1" />
                <img src={logo2} alt="Logo 2" />
            </ul>
        </div>
    );
}

export default NavBar;