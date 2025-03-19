import { prisma } from "../config/prisma-client";
import { PurchaseOrderRepositoryPrisma } from "../interfaces/purchaseOrder";

export const PurchaseOrderRepository: PurchaseOrderRepositoryPrisma = {
  async create(data) {
    const { number, createdAt } = data;

    return await prisma.purchaseOrder.create({ data: { number, createdAt } });
  },

  async getAll() {
    return await prisma.purchaseOrder.findMany({});
  },

  async getById(id) {
    return await prisma.purchaseOrder.findUnique({ where: { id } });
  },

  async delete(id) {
    return await prisma.purchaseOrder.delete({ where: { id } });
  },
};
