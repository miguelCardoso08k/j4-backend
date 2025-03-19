export interface CreatePaymentRecord {
  recordId: string;
  paymentId: string;
}

export interface PaymentRecord extends CreatePaymentRecord {}

export interface PaymentRecordRepositoryPrisma {
  create(data: CreatePaymentRecord): Promise<null | PaymentRecord>;
  getAll(): Promise<null | PaymentRecord[]>;
  getByRecord(recordId: string): Promise<null | PaymentRecord[]>;
  getById(data: {
    recordId: string;
    paymentId: string;
  }): Promise<null | PaymentRecord>;
  delete(data: {
    recordId: string;
    paymentId: string;
  }): Promise<null | PaymentRecord>;
}
