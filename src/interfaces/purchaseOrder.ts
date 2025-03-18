export interface CreatePurchaseOrder {
  createdAt?: Date;
  number: number;
}

export interface PurchaseOrder extends CreatePurchaseOrder {
  id: string;
}

export interface PurchaseOrderRepositoryPrisma {
  create(data: CreatePurchaseOrder): Promise<null | PurchaseOrder>;
  getAll(): Promise<null | PurchaseOrder[]>;
  getById(id: string): Promise<null | PurchaseOrder>;
  delete(id: string): Promise<null | PurchaseOrder>;
}
