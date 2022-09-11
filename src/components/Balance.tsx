import { formatCurrency } from '../utils/formatCurrency';
import styles from '../components/Balance.module.css';

interface BalanceProps {
  incomes: number;
  expenses: number;
  total: number;
}

export function Balance({ incomes, expenses, total }: BalanceProps) {
  return (
    <section className={styles.balance}>
      <div className={styles.balanceInfo}>
        <strong>Entradas</strong>
        <span>{formatCurrency(incomes)}</span>
      </div>
      <div className={styles.balanceInfo}>
        <strong>Saídas</strong>
        <span>{formatCurrency(expenses)}</span>
      </div>
      <div className={styles.balanceInfo}>
        <strong>Total</strong>
        <span>{formatCurrency(total)}</span>
      </div>
    </section>
  );
}
