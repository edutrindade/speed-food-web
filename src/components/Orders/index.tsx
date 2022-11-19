import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
    {
        "_id": "63791c79855ba4196f097b93",
        "table": "1",
        "products": [
            {
                "product": {
                    "name": "Pizza Calabresa",
                    "imagePath": "1668707992086-calabresa.png",
                    "price": 50,
                },
                "quantity": 2,
                "_id": "63791c79855ba4196f097b94"
            },
            {
                "product": {
                    "name": "Coca-Cola",
                    "imagePath": "1668887650542-coca-cola.png",
                    "price": 10,
                },
                "quantity": 1,
                "_id": "63793537855ba4196f097bd8"
            }
        ],
        "status": "WAITING",
        "total": 110
    }
];

export function Orders() {
    return (
        <Container>
            <OrdersBoard
                icon="🕓"
                title="Fila de espera"
                orders={orders.filter(order => order.status === 'WAITING')}
            />

            <OrdersBoard
                icon="👨‍🍳"
                title="Em produção"
                orders={orders.filter(order => order.status === 'IN_PRODUCTION')}
            />

            <OrdersBoard
                icon="✅"
                title="Pronto"
                orders={orders.filter(order => order.status === 'DONE')}
            />
        </Container>
    );
}