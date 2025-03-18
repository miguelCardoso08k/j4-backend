export interface CreateStock {
  productId: string;
  quantity?: number;
}

export interface Stock extends CreateStock {
  id: string;
  updatedAt: Date;
}

export interface StockRepositoryPrisma {
  create(data: CreateStock): Promise<null | Stock>;
  getAll(): Promise<null | Stock[]>;
  getById(id: string): Promise<null | Stock>;
  getByProduct(id: string): Promise<null | Stock>;
  updateQuantity(data: { id: string; value: number }): Promise<null | Stock>;
  delete(id: string): Promise<null | Stock>;
}
