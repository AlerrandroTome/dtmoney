import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { api } from './../../services/api';
import { useTransaction } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const { createTransaction } = useTransaction();

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            type,
            amount,
            category,
            title
        });

        setAmount(0)
        setCategory('')
        setTitle('')
        setType('deposit')

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="close modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Add new transaction</h2>

                <input
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                        type='button'
                    >
                        <img src={incomeImg} alt="income" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        type='button'
                    >
                        <img src={outcomeImg} alt="outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Save</button>
            </Container>
        </Modal>
    );
}