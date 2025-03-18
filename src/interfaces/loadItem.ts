export interface CreateLoadItem {
  loadId: string;
  productId: string;
  quantity: number;
}

export interface LoadItem extends CreateLoadItem {}

export interface LoadItemRepositoryPrisma {
  create(data: CreateLoadItem): Promise<null | LoadItem>;
  getAll(loadId: string): Promise<null | LoadItem[]>;
  getItem(data: {
    productId: string;
    loadId: string;
  }): Promise<null | LoadItem[]>;
  getById(id: string): Promise<null | LoadItem>;
  updateQuantity(data: { id: string; value: number }): Promise<null | LoadItem>;
  delete(id: string): Promise<null | LoadItem>;
}
