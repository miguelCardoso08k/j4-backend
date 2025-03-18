enum MovementType {
  IN = "IN",
  OUT = "OUT",
}

export interface CreateStockMovement {
  productId: string;
  quantity: number;
  type: MovementType;
}

export interface StockMovement extends CreateStockMovement {
  id: string;
  createdAt: Date;
}

export interface StockMovementRepositoryPrisma {
  create(data: CreateStockMovement): Promise<null | StockMovement>;
  getAll(): Promise<null | StockMovement[]>;
  getByProduct(id: string): Promise<null | StockMovement[]>;
  getById(id: string): Promise<null | StockMovement>;
}
