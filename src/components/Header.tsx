import {SignOut} from 'phosphor-react';
import fundsLogo from '../assets/funds-logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logotipoContent}>
        <h1>Funds</h1>
        <img src={fundsLogo} alt="Logotipo do Funds" />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.infoContent}>
          <strong>Saldo:</strong>
          <span>R$ 30.000,00</span>
        </div>
        <div className={styles.infoContent}>
          <strong>Gabriel Amorim</strong>
          <a href="#">
            <SignOut /> Sair
          </a>
        </div>
      </div>
    </header>
  );
}
