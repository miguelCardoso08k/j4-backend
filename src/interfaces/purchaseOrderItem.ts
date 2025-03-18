export interface CreatePurchaseOrderItem {
  purchaseOrderId: string;
  productId: string;
  quantity: number;
}

export interface PurchaseOrderItem extends CreatePurchaseOrderItem {
  id: string;
}

export interface PurchaseOrderItemRepositoryPrisma {
  create(data: CreatePurchaseOrderItem): Promise<null | PurchaseOrderItem>;
  getAll(purchaseOrderId: string): Promise<null | PurchaseOrderItem[]>;
  getById(id: string): Promise<null | PurchaseOrderItem>;
  updateQuantity(data: {
    id: string;
    value: number;
  }): Promise<null | PurchaseOrderItem>;
  delete(id: string): Promise<null | PurchaseOrderItem>;
}
