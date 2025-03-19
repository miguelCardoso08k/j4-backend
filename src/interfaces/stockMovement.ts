type MovementType = "IN" | "OUT";

export interface CreateStockMovement {
  productId: string;
  quantity: number;
  type: MovementType;
  createdAt?: Date;
}

export interface StockMovement extends CreateStockMovement {
  id: string;
}

export interface StockMovementRepositoryPrisma {
  create(data: CreateStockMovement): Promise<null | StockMovement>;
  getAll(): Promise<null | StockMovement[]>;
  getByProduct(id: string): Promise<null | StockMovement[]>;
  getById(id: string): Promise<null | StockMovement>;
  delete(id: string): Promise<null | StockMovement>;
}
