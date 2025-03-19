export interface CreateOrderItem {
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  totalAmount: number;
  discountValue?: number | null;
  discountPercentage?: number | null;
}

export interface OrderItem extends CreateOrderItem {
  id: string;
}

export interface OrderItemRepositoryPrisma {
  create(data: CreateOrderItem): Promise<null | OrderItem>;
  getAll(orderId: string): Promise<null | OrderItem[]>;
  getById(id: string): Promise<null | OrderItem>;
  updateDiscountValue(data: {
    id: string;
    value: number;
  }): Promise<null | OrderItem>;
  updateDiscountPercentage(data: {
    id: string;
    value: number;
  }): Promise<null | OrderItem>;
  updateTotalAmount(data: {
    id: string;
    value: number;
  }): Promise<null | OrderItem>;
  updateQuantity(data: {
    id: string;
    value: number;
  }): Promise<null | OrderItem>;
  delete(id: string): Promise<null | OrderItem>;
}
