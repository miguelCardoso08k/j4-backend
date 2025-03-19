export interface CreateLoadItem {
  loadId: string;
  productId: string;
  quantity: number;
}

export interface LoadItem extends CreateLoadItem {}

export interface LoadItemRepositoryPrisma {
  create(data: CreateLoadItem): Promise<null | LoadItem>;
  getAll(loadId: string): Promise<null | LoadItem[]>;
  getById(data: {
    productId: string;
    loadId: string;
  }): Promise<null | LoadItem>;
  updateQuantity(data: {
    productId: string;
    loadId: string;
    value: number;
  }): Promise<null | LoadItem>;
  delete(data: { productId: string; loadId: string }): Promise<null | LoadItem>;
}
