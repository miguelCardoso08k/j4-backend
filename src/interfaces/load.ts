enum LoadStatus {
  PENDING = "PENDING",
  LOADING = "LOADING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export interface CreateLoad {
  number: number;
  status: LoadStatus;
}

export interface Load extends CreateLoad {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoadRepositoryPrisma {
  create(data: CreateLoad): Promise<null | Load>;
  getAll(): Promise<null | Load[]>;
  getById(id: string): Promise<null | Load>;
  updateStatus(data: { id: string; value: LoadStatus }): Promise<null | Load>;
  delete(id: string): Promise<null | Load>;
}
