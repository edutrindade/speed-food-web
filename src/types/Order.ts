export interface Order {
    _id: string;
    table: string;
    total: number;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    products: Array<{
        _id: string;
        quantity: number,
        product: {
            name: string;
            imagePath: string;
            price: number;
        };
    }>;
};