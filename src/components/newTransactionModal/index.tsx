import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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

                <input
                    type="text"
                    placeholder="Category"
                />
                <button type="submit">Save</button>
            </Container>
        </Modal>
    );
}