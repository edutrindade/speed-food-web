import { useState } from "react";
import { Order } from "../../types/Order";
import { ModalOrderDetails } from "../Modal/OrderDetails";
import { Board, OrdersContainer } from "../Orders/styles";

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
};

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

    function handleOpenModal(order: Order) {
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedOrder(null);
    }

    return (
        <Board>
            <ModalOrderDetails visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal} />

            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map(order => (
                        <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} {order.products.length > 1 ? 'itens' : 'item'}</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}
        </Board>
    )
}