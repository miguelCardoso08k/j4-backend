import { prisma } from "../config/prisma-client";
import { OrderRepositoryPrisma } from "../interfaces/order";

export const OrderRepository: OrderRepositoryPrisma = {
  async create(data) {
    const {
      customerId,
      discountPercentage,
      discountValue,
      number,
      status,
      totalAmount,
      createdAt,
    } = data;

    return await prisma.order.create({
      data: {
        number,
        status,
        totalAmount,
        createdAt,
        customerId,
        discountPercentage,
        discountValue,
      },
    });
  },

  async getAll() {
    return await prisma.order.findMany({});
  },

  async getByCustomer(id) {
    return await prisma.order.findMany({ where: { customerId: id } });
  },

  async getById(id) {
    return await prisma.order.findUnique({ where: { id } });
  },

  async updateDiscountPercentage(data) {
    const { id, value } = data;

    return await prisma.order.update({
      where: { id },
      data: { discountPercentage: value },
    });
  },

  async updateDiscountValue(data) {
    const { id, value } = data;

    return await prisma.order.update({
      where: { id },
      data: { discountValue: value },
    });
  },

  async updateStatus(data) {
    const { id, value } = data;

    return await prisma.order.update({
      where: { id },
      data: { status: value },
    });
  },

  async updateTotalAmount(data) {
    const { id, value } = data;

    return await prisma.order.update({
      where: { id },
      data: { totalAmount: value },
    });
  },

  async delete(id) {
    return await prisma.order.delete({ where: { id } });
  },
};
