import { prisma } from "../config/prisma-client";
import { LoadItemRepositoryPrisma } from "../interfaces/loadItem";

export const LoadItemRepository: LoadItemRepositoryPrisma = {
  async create(data) {
    const { loadId, productId, quantity } = data;

    return await prisma.loadItem.create({
      data: {
        loadId,
        productId,
        quantity,
      },
    });
  },

  async getAll(loadId) {
    return await prisma.loadItem.findMany({ where: { loadId } });
  },

  async getById(data) {
    const { loadId, productId } = data;
    return await prisma.loadItem.findUnique({
      where: { loadId_productId: { loadId, productId } },
    });
  },

  async updateQuantity(data) {
    const { loadId, productId, value } = data;

    return await prisma.loadItem.update({
      where: { loadId_productId: { loadId, productId } },
      data: { quantity: value },
    });
  },

  async delete(data) {
    const { loadId, productId } = data;

    return await prisma.loadItem.delete({
      where: { loadId_productId: { loadId, productId } },
    });
  },
};
