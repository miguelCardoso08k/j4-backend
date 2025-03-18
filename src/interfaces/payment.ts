enum PaymentMethod {
  CASH = "CASH",
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  PIX = "PIX",
  BANK_TRANSFER = "BANK_TRANSFER",
}

export interface CreatePayment {
  customerId: string;
  paymentMethod: PaymentMethod;
  createdAt?: Date;
}

export interface Payment extends CreatePayment {
  id: string;
}

export interface PaymentRepositoryPrisma {
  create(data: CreatePayment): Promise<null | Payment>;
  getAll(): Promise<null | Payment[]>;
  getById(id: string): Promise<null | Payment>;
  getByCustomer(customerId: string): Promise<null | Payment>;
  updateMethod(data: {
    id: string;
    value: PaymentMethod;
  }): Promise<null | Payment>;
  updateValue(data: { id: string; value: number }): Promise<null | Payment>;
  delete(id: string): Promise<null | Payment>;
}
