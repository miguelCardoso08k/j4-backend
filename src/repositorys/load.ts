import { prisma } from "../config/prisma-client";
import { LoadRepositoryPrisma } from "../interfaces/load";

export const LoadRepository: LoadRepositoryPrisma = {
  async create(data) {
    const { number, status } = data;

    return await prisma.load.create({
      data: { number, status },
    });
  },

  async getAll() {
    return await prisma.load.findMany({});
  },

  async getById(id) {
    return await prisma.load.findUnique({ where: { id } });
  },

  async updateStatus(data) {
    const { id, value } = data;

    return await prisma.load.update({ where: { id }, data: { status: value } });
  },

  async delete(id) {
    return await prisma.load.delete({ where: { id } });
  },
};
