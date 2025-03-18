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
  gelAll(): Promise<null | Customer[]>;
  getById(id: string): Promise<null | Customer>;
  getByName(name: string): Promise<null | Customer[]>;
  updateBarbershopName(data: {
    id: string;
    value: string;
  }): Promise<null | Customer>;
  updateNickname(data: { id: string; value: string }): Promise<null | Customer>;
  updateCpf(data: { id: string; value: string }): Promise<null | Customer>;
  updateCnpj(data: { id: string; value: string }): Promise<null | Customer>;
  delete(data: CreateCustomer): Promise<null | Customer>;
}
