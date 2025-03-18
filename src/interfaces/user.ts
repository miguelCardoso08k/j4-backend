export interface CreateUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

export interface User extends CreateUser {
  id: string;
}

export interface UserRepositoryPrisma {
  create(data: CreateUser): Promise<null | User>;
  getAll(): Promise<null | User[]>;
  getById(id: string): Promise<null | User>;
  getByName(name: string): Promise<null | User[]>;
  updatePhone(data: { id: string; value: string }): Promise<null | User>;
  updateEmail(data: { id: string; value: string }): Promise<null | User>;
  updatePassword(data: { id: string; value: string }): Promise<null | User>;
  delete(id: string): Promise<null | User>;
}
