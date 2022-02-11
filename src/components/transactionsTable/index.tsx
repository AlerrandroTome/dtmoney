import { useContext } from "react";
import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useTransaction();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{new Intl.NumberFormat('en-us', {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(transaction.amount)}</td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('en-us').format(new Date(transaction.createdAt))}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    )
}