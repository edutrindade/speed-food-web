import styled from "styled-components";

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background: #FFF;
    width: 480px;
    border-radius: 8px;
    padding: 32px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            font-size: 24px;
        }

        button {
            border: 0;
            background: transparent;
            display: flex;
        }
    }

    .status-container {
        margin-top: 32px;

        smal {
            font-size: 16px;
            opacity: 0.8;
        }

        div {
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;

export const OrderDetails = styled.div`
    margin-top: 32px;

    > strong {
        font-weight: 500;
        font-size: 14px;
        opacity: 0.8;
    }

    .order-items {
        margin-top: 16px;

        .item {
            display: flex;

            & + .item {
                margin-top: 16px;
            }

            img {
                border-radius: 6px;
            }

            .quantity {
                color: #666;
                font-size: 14px;
                display: block;
                min-width: 20px;
                margin-left: 12px;
            }

            .product-details {
                margin-left: 4px;
                
                strong {
                    display: block;
                    margin-bottom: 2px;
                }

                span {
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }

    .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;
       
        span { 
            font-weight: 500;
            font-size: 16px;
            opacity: 0.8;
        }
    }
`;

export const Actions = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    .primary {
        background: #333333;
        border-radius: 48px;
        border: 0;
        color: #FFF;
        font-size: 16px;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .secondary {
        padding: 14px 24px;
        color: #d73035;
        font-weight: bold;
        border: 0;
        background: transparent;
        margin-top: 8px;
    }
`;
