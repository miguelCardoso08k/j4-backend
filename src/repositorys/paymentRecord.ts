import { prisma } from "../config/prisma-client";
import { PaymentRecordRepositoryPrisma } from "../interfaces/paymentRecord";

export const PaymentRecordRepository: PaymentRecordRepositoryPrisma = {
  async create(data) {
    const { paymentId, recordId } = data;

    return await prisma.paymentRecord.create({
      data: { paymentId, recordId },
    });
  },

  async getAll() {
    return await prisma.paymentRecord.findMany({});
  },

  async getByRecord(recordId) {
    return await prisma.paymentRecord.findMany({ where: { recordId } });
  },

  async getById(data) {
    const { paymentId, recordId } = data;

    return await prisma.paymentRecord.findUnique({
      where: { recordId_paymentId: { paymentId, recordId } },
    });
  },

  async delete(data) {
    const { paymentId, recordId } = data;

    return await prisma.paymentRecord.delete({
      where: { recordId_paymentId: { paymentId, recordId } },
    });
  },
};
