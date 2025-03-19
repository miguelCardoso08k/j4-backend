import { prisma } from "../config/prisma-client";
import { OrderRecordRepositoryPrisma } from "../interfaces/orderRecord";

export const OrderRecordRepository: OrderRecordRepositoryPrisma = {
  async create(data) {
    const { orderId, recordId } = data;

    return await prisma.orderRecord.create({
      data: {
        orderId,
        recordId,
      },
    });
  },

  async getAll() {
    return await prisma.orderRecord.findMany({});
  },

  async getByRecord(recordId) {
    return await prisma.orderRecord.findMany({ where: { recordId } });
  },

  async getById(data) {
    const { orderId, recordId } = data;

    return await prisma.orderRecord.findUnique({
      where: { orderId_recordId: { orderId, recordId } },
    });
  },

  async delete(data) {
    const { orderId, recordId } = data;

    return await prisma.orderRecord.delete({
      where: { orderId_recordId: { orderId, recordId } },
    });
  },
};
