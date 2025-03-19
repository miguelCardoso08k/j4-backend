import { prisma } from "../config/prisma-client";
import { StockRepositoryPrisma } from "../interfaces/stock";

export const StockRepository: StockRepositoryPrisma = {
  async create(data) {
    const { productId, quantity } = data;

    return await prisma.stock.create({ data: { productId, quantity } });
  },

  async getAll() {
    return await prisma.stock.findMany({});
  },

  async getById(id) {
    return await prisma.stock.findUnique({ where: { id } });
  },

  async getByProduct(id) {
    return await prisma.stock.findUnique({ where: { productId: id } });
  },

  async updateQuantity(data) {
    const { id, value } = data;

    return await prisma.stock.update({
      where: { id },
      data: { quantity: value },
    });
  },

  async delete(id) {
    return await prisma.stock.delete({ where: { id } });
  },
};
