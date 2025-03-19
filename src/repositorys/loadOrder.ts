import { prisma } from "../config/prisma-client";
import { LoadOrderRepositoryPrisma } from "../interfaces/loadOrder";

export const LoadOrderRepository: LoadOrderRepositoryPrisma = {
  async create(data) {
    const { loadId, orderId } = data;

    return await prisma.loadOrder.create({ data: { loadId, orderId } });
  },

  async getAll(loadId) {
    return await prisma.loadOrder.findMany({ where: { loadId } });
  },

  async getById(data) {
    const { loadId, orderId } = data;

    return await prisma.loadOrder.findUnique({
      where: { loadId_orderId: { loadId, orderId } },
    });
  },

  async delete(data) {
    const { loadId, orderId } = data;

    return await prisma.loadOrder.delete({
      where: { loadId_orderId: { loadId, orderId } },
    });
  },
};
