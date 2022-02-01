import { GlobalStyle } from './styles/global';
import { Header } from './components/header/index';
import { Dashboard } from './components/dashboard';
import { createServer } from 'miragejs';
import { useState } from 'react';
import { NewTransactionModal } from './components/newTransactionModal';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return {
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        createdAt: new Date()
      }
    })
  }
})

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(true);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
