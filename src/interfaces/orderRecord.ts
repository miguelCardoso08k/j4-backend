export interface CreateOrderRecord {
  recordId: string;
  orderId: string;
}

export interface OrderRecord extends CreateOrderRecord {}

export interface OrderRecordRepositoryPrisma {
  create(data: CreateOrderRecord): Promise<null | OrderRecord>;
  getAll(): Promise<null | OrderRecord[]>;
  getByRecord(recordId: string): Promise<null | OrderRecord[]>;
  getById(data: {
    recordId: string;
    orderId: string;
  }): Promise<null | OrderRecord>;
  delete(data: {
    recordId: string;
    orderId: string;
  }): Promise<null | OrderRecord>;
}
