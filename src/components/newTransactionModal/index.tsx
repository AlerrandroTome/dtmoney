import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

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
            <Container>
                <h2>Add new transaction</h2>

                <input
                    type="text"
                    placeholder='Title'
                />

                <input
                    type="number"
                    placeholder="Price"
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
                />
                <button type="submit">Save</button>
            </Container>
        </Modal>
    );
}