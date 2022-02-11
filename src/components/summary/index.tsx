import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext, useEffect } from 'react';
import { useTransaction } from '../../hooks/useTransactions';

export function Summary() {
    const { transactions } = useTransaction();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    });

    useEffect(() => {
        console.log(transactions);
    }, [transactions])

    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Incomes" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-us', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="Outcomes" />
                </header>
                <strong>
                    - {new Intl.NumberFormat('en-us', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>                    {new Intl.NumberFormat('en-us', {
                    style: 'currency',
                    currency: 'USD',
                }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}