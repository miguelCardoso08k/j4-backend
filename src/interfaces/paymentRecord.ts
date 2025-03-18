export interface CreatePaymentRecord {
  recordId: string;
  paymentId: string;
}

export interface PaymentRecord extends CreatePaymentRecord {}

export interface PaymentRecordRepositoryPrisma {
  create(data: CreatePaymentRecord): Promise<null | PaymentRecord>;
  getAll(): Promise<null | PaymentRecord[]>;
  getByRecord(recordId: string): Promise<null | PaymentRecord[]>;
  getById(id: string): Promise<null | PaymentRecord>;
  delete(id: string): Promise<null | PaymentRecord>;
}
