import { prisma } from "../config/prisma-client";
import { PaymentRepositoryPrisma } from "../interfaces/payment";

export const PaymentRepository: PaymentRepositoryPrisma = {
  async create(data) {
    const { customerId, paymentMethod, createdAt, value } = data;

    return await prisma.payment.create({
      data: {
        customerId,
        paymentMethod,
        value,
        createdAt,
      },
    });
  },

  async getAll() {
    return await prisma.payment.findMany({});
  },

  async getById(id) {
    return await prisma.payment.findUnique({ where: { id } });
  },

  async getByCustomer(customerId) {
    return await prisma.payment.findMany({ where: { customerId } });
  },

  async updateMethod(data) {
    const { id, value } = data;

    return await prisma.payment.update({
      where: { id },
      data: { paymentMethod: value },
    });
  },

  async updateValue(data) {
    const { id, value } = data;

    return await prisma.payment.update({ where: { id }, data: { value } });
  },

  async delete(id) {
    return await prisma.payment.delete({ where: { id } });
  },
};
