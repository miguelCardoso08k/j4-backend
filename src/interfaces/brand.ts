export interface CreateBrand {
  name: string;
}

export interface Brand extends CreateBrand {
  id: string;
}

export interface BrandRepositoryPrisma {
  create(data: CreateBrand): Promise<null | Brand>;
  getAll(): Promise<null | Brand[]>;
  getById(id: string): Promise<null | Brand>;
  getByName(name: string): Promise<null | Brand[]>;
  updateName(data: { id: string; value: string }): Promise<null | Brand>;
  delete(id: string): Promise<null | Brand>;
}
