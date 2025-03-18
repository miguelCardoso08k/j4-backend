export interface CreateSupplier {
  name: string;
  addressId: string;
  createdAt: Date;
}

export interface Supplier extends CreateSupplier {
  id: string;
  updatedAt: Date;
}

export interface SupplierRepositoryPrisma {
  create(data: CreateSupplier): Promise<null | Supplier>;
  getAll(): Promise<null | Supplier[]>;
  getById(id: string): Promise<null | Supplier>;
  getByName(name: string): Promise<null | Supplier[]>;
  updateName(data: { id: string; value: string }): Promise<null | Supplier>;
  delete(id: string): Promise<null | Supplier>;
}
