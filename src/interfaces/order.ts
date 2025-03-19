type OrderStatus = "PENDING" | "AWAITING_STOCK" | "IN_ROUTE" | "COMPLETED";

export interface CreateOrder {
  number: number;
  customerId: string;
  totalAmount: number;
  discountValue?: number | null;
  discountPercentage?: number | null;
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
  getById(id: string): Promise<null | Order>;
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
