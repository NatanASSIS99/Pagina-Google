
import React from 'react';
import styles from './Logocenter.module.css'; // Importe os estilos do Logocenter
import logoimg from './logoimg.svg';
import logo3G from './logo3G.svg';
import logoGoo1 from './logoGoo1.svg';
import logoGoo2 from './logoGoo2.svg';

function Logocenter() {
  return (
    <div className={styles.Logocenter}>
      <img src={logoimg} alt="Google" />
      <div className={styles.inputContainer}>
        <input />
        <img src={logoGoo1} alt="Google" className={styles.logoInsideInput} />
        <img src={logoGoo2} alt="Google" className={styles.logoInsideInput} />
      </div>
      <div>
        <button>Pesquisa Google</button>
        <button>Estou com sorte</button>
      </div>
      <section>
        <img src={logo3G} alt="Google" />
        <p>Faça o Check-up de privacidade</p>
      </section>
    </div>
  );
}

export default Logocenter;