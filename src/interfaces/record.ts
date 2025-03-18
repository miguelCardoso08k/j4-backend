export interface CreateRecord {
  customerId: string;
  balance: number;
  createdAt: Date;
}

export interface Record extends CreateRecord {
  id: string;
  updatedAt: Date;
}

export interface RecordRepositoryPrisma {
  create(data: CreateRecord): Promise<null | Record>;
  getAll(): Promise<null | Record[]>;
  getByRecord(customerId: string): Promise<null | Record[]>;
  getById(id: string): Promise<null | Record>;
  updateBalance(data: { id: string; value: number }): Promise<null | Record>;
  delete(id: string): Promise<null | Record>;
}
