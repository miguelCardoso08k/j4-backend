import { prisma } from "../config/prisma-client";
import { RecordRepositoryPrisma } from "../interfaces/record";

export const RecordRepository: RecordRepositoryPrisma = {
  async create(data) {
    const { balance, customerId, createdAt } = data;

    return await prisma.record.create({
      data: { balance, customerId, createdAt },
    });
  },

  async getAll() {
    return await prisma.record.findMany({});
  },

  async getById(id) {
    return await prisma.record.findUnique({ where: { id } });
  },

  async getByRecord(customerId) {
    return await prisma.record.findMany({ where: { customerId } });
  },

  async updateBalance(data) {
    const { id, value } = data;

    return await prisma.record.update({
      where: { id },
      data: { balance: value },
    });
  },

  async delete(id) {
    return await prisma.record.delete({ where: { id } });
  },
};
