export interface CreateCustomer {
  firstName: string;
  lastName: string;
  barbershopName: string;
  nickname?: string | null;
  cpf?: string | null;
  cnpj?: string | null;
  addressId: string;
  createdAt?: Date;
}

export interface Customer extends CreateCustomer {
  id: string;
  updatedAt: Date;
}

export interface CustomerRepositoryPrisma {
  create(data: CreateCustomer): Promise<null | Customer>;
  getAll(): Promise<null | Customer[]>;
  getById(id: string): Promise<null | Customer>;
  getByName(name: string): Promise<null | Customer[]>;
  updateBarbershopName(data: {
    id: string;
    value: string;
  }): Promise<null | Customer>;
  updateNickname(data: { id: string; value: string }): Promise<null | Customer>;
  updateFirstName(data: {
    id: string;
    value: string;
  }): Promise<null | Customer>;
  updateLastName(data: { id: string; value: string }): Promise<null | Customer>;
  updateCpf(data: { id: string; value: string }): Promise<null | Customer>;
  updateCnpj(data: { id: string; value: string }): Promise<null | Customer>;
  delete(id: string): Promise<null | Customer>;
}
