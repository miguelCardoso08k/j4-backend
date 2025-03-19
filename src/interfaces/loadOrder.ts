export interface CreateLoadOrder {
  loadId: string;
  orderId: string;
}

export interface LoadOrder extends CreateLoadOrder {}

export interface LoadOrderRepositoryPrisma {
  create(data: CreateLoadOrder): Promise<null | LoadOrder>;
  getAll(loadId: string): Promise<null | LoadOrder[]>;
  getById(data: { loadId: string; orderId: string }): Promise<null | LoadOrder>;
  delete(data: { loadId: string; orderId: string }): Promise<null | LoadOrder>;
}
