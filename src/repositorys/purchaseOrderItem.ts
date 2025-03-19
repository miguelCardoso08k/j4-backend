import { prisma } from "../config/prisma-client";
import { PurchaseOrderItemRepositoryPrisma } from "../interfaces/purchaseOrderItem";

export const PurchaseOrderItem: PurchaseOrderItemRepositoryPrisma = {
  async create(data) {
    const { productId, purchaseOrderId, quantity } = data;

    return await prisma.purchaseOrderItem.create({
      data: { productId, purchaseOrderId, quantity },
    });
  },

  async getAll(purchaseOrderId) {
    return await prisma.purchaseOrderItem.findMany({
      where: { purchaseOrderId },
    });
  },

  async getById(id) {
    return await prisma.purchaseOrderItem.findUnique({ where: { id } });
  },

  async updateQuantity(data) {
    const { id, value } = data;

    return await prisma.purchaseOrderItem.update({
      where: { id },
      data: { quantity: value },
    });
  },

  async delete(id) {
    return await prisma.purchaseOrderItem.delete({ where: { id } });
  },
};
