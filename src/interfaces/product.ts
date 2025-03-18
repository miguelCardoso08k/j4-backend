export interface CreateProduct {
  name: string;
  categoryId?: string;
  supplierId: string;
  purchasePrice: number;
  salePrice: number;
  brandId?: string;
}

export interface Product extends CreateProduct {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductRepositoryPrisma {
  create(data: CreateProduct): Promise<null | Product>;
  getAll(): Promise<null | Product[]>;
  getById(id: string): Promise<null | Product>;
  getByName(name: string): Promise<null | Product[]>;
  updateName(data: { id: string; value: string }): Promise<null | Product>;
  updateCategory(data: { id: string; value: string }): Promise<null | Product>;
  updateSupplier(data: { id: string; value: string }): Promise<null | Product>;
  updatePurchasePrice(data: {
    id: string;
    value: number;
  }): Promise<null | Product>;
  updateSalePrice(data: { id: string; value: number }): Promise<null | Product>;
  updateBrand(data: { id: string; value: number }): Promise<null | Product>;
  delete(id: string): Promise<null | Product>;
}
