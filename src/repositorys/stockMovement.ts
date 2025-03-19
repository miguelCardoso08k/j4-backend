import { prisma } from "../config/prisma-client";
import { StockMovementRepositoryPrisma } from "../interfaces/stockMovement";

export const StockMovementRepository: StockMovementRepositoryPrisma = {
  async create(data) {
    const { productId, quantity, type } = data;

    return await prisma.stockMovements.create({
      data: { quantity, productId, type },
    });
  },

  async getAll() {
    return await prisma.stockMovements.findMany({});
  },

  async getById(id) {
    return await prisma.stockMovements.findUnique({ where: { id } });
  },

  async getByProduct(id) {
    return await prisma.stockMovements.findMany({ where: { productId: id } });
  },

  async delete(id) {
    return await prisma.stockMovements.delete({ where: { id } });
  },
};
