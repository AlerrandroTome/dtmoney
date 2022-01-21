import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Web Site Development</td>
                        <td className="deposit">+ R$12000</td>
                        <td>Development</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td>House Rent</td>
                        <td className="withdraw">- R$1100</td>
                        <td>House</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}