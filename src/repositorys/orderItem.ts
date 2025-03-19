import { prisma } from "../config/prisma-client";
import { OrderItemRepositoryPrisma } from "../interfaces/orderItem";

export const OrderItemRepository: OrderItemRepositoryPrisma = {
  async create(data) {
    const {
      orderId,
      price,
      productId,
      quantity,
      totalAmount,
      discountPercentage,
      discountValue,
    } = data;

    return await prisma.orderItem.create({
      data: {
        price,
        quantity,
        totalAmount,
        discountPercentage,
        discountValue,
        productId,
        orderId,
      },
    });
  },

  async getAll(orderId) {
    return await prisma.orderItem.findMany({ where: { orderId } });
  },

  async getById(id) {
    return await prisma.orderItem.findUnique({ where: { id } });
  },

  async updateDiscountPercentage(data) {
    const { id, value } = data;

    return await prisma.orderItem.update({
      where: { id },
      data: { discountPercentage: value },
    });
  },

  async updateDiscountValue(data) {
    const { id, value } = data;

    return await prisma.orderItem.update({
      where: { id },
      data: { discountValue: value },
    });
  },

  async updateQuantity(data) {
    const { id, value } = data;

    return await prisma.orderItem.update({
      where: { id },
      data: { quantity: value },
    });
  },

  async updateTotalAmount(data) {
    const { id, value } = data;

    return await prisma.orderItem.update({
      where: { id },
      data: { totalAmount: value },
    });
  },

  async delete(id) {
    return await prisma.orderItem.delete({ where: { id } });
  },
};
