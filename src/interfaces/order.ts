enum OrderStatus {
  PENDING = "PENDING",
  AWAITING_STOCK = "AWAITING_STOCK",
  IN_ROUTE = "IN_ROUTE",
  COMPLETED = "COMPLETED",
}

export interface CreateOrder {
  number: number;
  customerId: string;
  totalAmount: number;
  discountValue: number;
  discountPercentage: number;
  status: OrderStatus;
  createdAt?: Date;
}

export interface Order extends CreateOrder {
  id: string;
  updatedAt: Date;
}

export interface OrderRepositoryPrisma {
  create(data: CreateOrder): Promise<null | Order>;
  getAll(): Promise<null | Order[]>;
  getByCustomer(id: string): Promise<null | Order[]>;
  getById(id: string): Promise<null | Order[]>;
  updateStatus(data: { id: string; value: OrderStatus }): Promise<null | Order>;
  updateDiscountValue(data: {
    id: string;
    value: number;
  }): Promise<null | Order>;
  updateDiscountPercentage(data: {
    id: string;
    value: number;
  }): Promise<null | Order>;
  updateTotalAmount(data: { id: string; value: number }): Promise<null | Order>;
  delete(id: string): Promise<null | Order>;
}
