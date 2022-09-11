import { Funnel, Plus } from 'phosphor-react';

import { Balance } from './Balance';
import { Transaction } from './Transaction';
import styles from './Transactions.module.css';
import { useState } from 'react';

enum TRANSACTION_TYPE {
  INCOMES = 'INCOMES',
  ESSENTIAL_EXPENSES= 'ESSENTIAL_EXPENSES',
  NECESSARY_EXPENSES= 'NECESSARY_EXPENSES',
  SUPERFLUOUS_EXPENSES= 'SUPERFLUOUS_EXPENSES',
  INVESTMENTS= 'INVESTMENTS',
};

export interface TransactionProps {
  id: number;
  name: string;
  type: TRANSACTION_TYPE;
  date: string;
  amount: number;
  
  category?: string;
}

const transactionsMock: TransactionProps[] = [
  {
    id: 1,
    name: 'Salário',
    type: TRANSACTION_TYPE.INCOMES,
    date: '2022-06-12',
    amount: 50000,
  },
  {
    id: 2,
    name: 'Aluguel',
    type: TRANSACTION_TYPE.ESSENTIAL_EXPENSES,
    category: 'Moradia',
    date: '2022-06-12',
    amount: -10400,
  },
  {
    id: 3,
    name: 'Livro: Como fazer amigos e influênciar p...',
    type: TRANSACTION_TYPE.NECESSARY_EXPENSES,
    category: 'Desenvolvimento Pessoal',
    date: '2022-06-12',
    amount: -123.5,
  },
  {
    id: 4,
    name: 'Pizza da festa',
    type: TRANSACTION_TYPE.SUPERFLUOUS_EXPENSES,
    date: '2022-06-12',
    amount: -59.99,
  },
  {
    id: 5,
    name: 'CDB pós liquidez diária',
    type: TRANSACTION_TYPE.INVESTMENTS,
    category: 'Renda Fixa',
    date: '2022-06-12',
    amount: -30000,
  },
  {
    id: 6,
    name: 'Compras do mês',
    type: TRANSACTION_TYPE.ESSENTIAL_EXPENSES,
    category: 'Alimentação',
    date: '2022-06-12',
    amount: -400,
  }
];

export function Transactions() {
  const [ transactions, setTransactions ] = useState(transactionsMock);
  
  function duplicateTransaction(transaction: TransactionProps) {
    setTransactions([...transactions, {
      ...transaction,
      id: transactions.length + 1,
    }]);
  }

  function deleteTransaction(transactionId: number) {
    setTransactions(transactions.filter(transaction => transaction.id !== transactionId));
  }

  function getBalanceInfo() {
    const amounts = transactions.map(transaction => transaction.amount);
    const incomes = amounts.filter(amount => amount > 0).reduce((a, b) => a + b);
    const expenses = amounts.filter(amount => amount < 0).reduce((a, b) => a + b);
    const total = incomes + expenses;

    return { incomes, expenses, total };
  }
  
  return (
    <div className={styles.financialMovementsContent}>
      <Balance {...getBalanceInfo()}/>
      <div className={styles.buttonContainer}>
        <button>
          <span>Criar novo</span>
          <Plus />
        </button>
        <button>
          <span>Filtrar</span>
          <Funnel />
        </button>
      </div>

      <div className={styles.transactionsWrapper}>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Data</th>
              <th className={styles.transactionAmount}>Valor</th>
              <th className={styles.actions}>Ações</th>
            </tr>
          </thead>
          <tbody>
            { transactions.map(transaction => {
                return (
                  <Transaction 
                    key={transaction.id} 
                    transaction={transaction} 
                    onDuplicateTransaction={duplicateTransaction} 
                    onDeleteTransaction={deleteTransaction}
                  />
                ) 
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
