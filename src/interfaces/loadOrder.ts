export interface CreateLoadOrder {
  loadId: string;
  orderId: string;
}

export interface LoadOrder extends CreateLoadOrder {
  id: string;
}

export interface LoadOrderRepositoryPrisma {
  create(data: CreateLoadOrder): Promise<null | LoadOrder>;
  getAll(loadId: string): Promise<null | LoadOrder[]>;
  getById(orderId: string): Promise<null | LoadOrder>;
  delete(id: string): Promise<null | LoadOrder>;
}
