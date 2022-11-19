import { Order } from "../../../types/Order";
import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";

import closeIcon from '../../../assets/images/close-icon.svg';
import { formatCurrency } from "../../../utils/formatCurrency";
import { useEffect } from "react";

interface ModalOrderDetailsProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
};

export function ModalOrderDetails({ visible, order, onClose }: ModalOrderDetailsProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);


    if (!visible || !order) return null;

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>
                    <button type="button" onClick={onClose}>
                        <img src={closeIcon} alt="Fechar" />
                    </button>
                </header>

                <div className="status-container">
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === 'WAITING' && '🕓'}
                            {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
                            {order.status === 'DONE' && '✅'}
                        </span>
                        <strong>
                            {order.status === 'WAITING' && 'Fila de espera'}
                            {order.status === 'IN_PRODUCTION' && 'Em produção'}
                            {order.status === 'DONE' && 'Pronto'}
                        </strong>
                    </div>
                </div>

                <OrderDetails>
                    <strong>Itens</strong>

                    <div className="order-items">
                        {order.products.map(({ _id, product, quantity }) => (
                            <div className="item" key={_id}>
                                <img
                                    src={`http://localhost:3030/uploads/${product.imagePath}`}
                                    width="56"
                                    height="40"
                                    alt={product.name}
                                />
                                <span className="quantity">{quantity}x</span>

                                <div className="product-details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total">
                        <span>Total</span>
                        <strong>{formatCurrency(110)}</strong>
                    </div>
                </OrderDetails>

                <Actions>
                    <button type="button" className="primary">
                        <span>👨‍🍳</span>
                        <strong>Iniciar Produção</strong>
                    </button>

                    <button type="button" className="secondary">
                        Cancelar Pedido
                    </button>
                </Actions>
            </ModalBody>
        </Overlay>
    );
}