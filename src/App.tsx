import './global.css';

import { Header } from './components/Header';
import { Transactions } from './components/Transactions';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      
      <main className={styles.wrapper}>
          <h1>Movimentos Financeiros</h1>
          
          <Transactions />
      </main>
    </div>
  )
}
