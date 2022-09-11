import { Circle, Copy, PencilSimpleLine, Trash } from 'phosphor-react';

import { TransactionProps } from './Transactions';
import { format } from 'date-fns';
import { formatCurrency } from '../utils/formatCurrency';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Transaction.module.css';

const transactionTypeColor = {
  INCOMES: {
    color: '#00875f',
    tooltip: 'Receitas',
  },
  ESSENTIAL_EXPENSES: {
    color: '#8d8d99',
    tooltip: 'Gastos essenciais',
  },
  NECESSARY_EXPENSES: {
    color: '#121214',
    tooltip: 'Gastos necessários',
  },
  SUPERFLUOUS_EXPENSES: {
    color: '#F75A68',
    tooltip: 'Gastos livres',
  },
  INVESTMENTS: {
    color: '#C3DEC5',
    tooltip: 'Investimentos',
  },
}

interface TransactionTableRow {
  transaction: TransactionProps;
  onDuplicateTransaction: (transaction: TransactionProps) => void;
  onDeleteTransaction: (transactionId: number) => void;
}

export function Transaction({ transaction, onDuplicateTransaction, onDeleteTransaction }: TransactionTableRow) {
  const amountFormatted = formatCurrency(transaction.amount)

  const dateFormatted = format(new Date(`${transaction.date} ${'03:00:00'}`), 'dd/MM/yyyy', {
    locale: ptBR,
  });

  function handleDuplicateTransaction() {
    onDuplicateTransaction(transaction);
  }
  
  function handleDeleteTransaction() {
    onDeleteTransaction(transaction.id);
  }

  return (
    <tr className={styles.transaction}>
      <th>
        <Circle 
          weight="fill" 
          color={transactionTypeColor[transaction.type].color} 
          alt={transactionTypeColor[transaction.type].tooltip} 
        />
      </th>
      <th>{transaction.name}</th>
      <th>{transaction.category ?? "-"}</th>
      <th>{dateFormatted}</th>
      <th className={styles.amountColumn}>{amountFormatted}</th>
      <th>
        <div className={styles.transactionActions}>
          <button title="Editar movimento financeiro">
            <PencilSimpleLine />
          </button>
          <button 
            onClick={handleDuplicateTransaction}
            title="Duplicar movimento financeiro"
          >
            <Copy />
          </button>
          <button 
            title="Deletar movimento financeiro"
            onClick={handleDeleteTransaction}  
          >
            <Trash />
          </button>
        </div>
      </th>
    </tr>
  );
}
