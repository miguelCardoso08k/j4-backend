export interface CreateAddress {
  street: string;
  number: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
}

export interface Address extends CreateAddress {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddressRepositoryPrisma {
  create(data: CreateAddress): Promise<null | Address>;
  getAll(): Promise<null | Address[]>;
  getById(id: string): Promise<null | Address>;
  getByValue(Value: string): Promise<null | Address[]>;
  updateStreet(data: { id: string; value: string }): Promise<null | Address>;
  updateNumber(data: { id: string; value: string }): Promise<null | Address>;
  updateComplement(data: {
    id: string;
    value: string;
  }): Promise<null | Address>;
  updateNeighborhood(data: {
    id: string;
    value: string;
  }): Promise<null | Address>;
  updateCity(data: { id: string; value: string }): Promise<null | Address>;
  updateState(data: { id: string; value: string }): Promise<null | Address>;
  updateCep(data: { id: string; value: string }): Promise<null | Address>;
  delete(id: string): Promise<null | Address>;
}
