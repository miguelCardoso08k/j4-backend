export interface CreateOrderRecord {
  recordId: string;
  orderId: string;
}

export interface OrderRecord extends CreateOrderRecord {}

export interface OrderRecordRepositoryPrisma {
  create(data: CreateOrderRecord): Promise<null | OrderRecord>;
  getAll(): Promise<null | OrderRecord[]>;
  getByRecord(recordId: string): Promise<null | OrderRecord[]>;
  getById(id: string): Promise<null | OrderRecord>;
  delete(id: string): Promise<null | OrderRecord>;
}
