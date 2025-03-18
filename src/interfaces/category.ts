export interface CreateCategory {
  name: string;
}

export interface Category extends CreateCategory {
  id: string;
}

export interface CategoryRepositoryPrisma {
  create(data: CreateCategory): Promise<null | Category>;
  getAll(data: CreateCategory): Promise<null | Category[]>;
  getById(id: string): Promise<null | Category>;
  getByName(name: string): Promise<null | Category[]>;
  updateName(data: { id: string; value: string }): Promise<null | Category>;
}
