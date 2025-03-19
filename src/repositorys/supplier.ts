import { prisma } from "../config/prisma-client";
import { SupplierRepositoryPrisma } from "../interfaces/supplier";

export const SupplierRepository: SupplierRepositoryPrisma = {
  async create(data) {
    const { addressId, createdAt, name } = data;

    return await prisma.supplier.create({
      data: { name, addressId, createdAt },
    });
  },

  async getAll() {
    return await prisma.supplier.findMany({});
  },

  async getById(id) {
    return await prisma.supplier.findUnique({ where: { id } });
  },

  async getByName(name) {
    return await prisma.supplier.findMany({
      where: { name: { contains: name } },
      orderBy: { name: "asc" },
    });
  },

  async updateName(data) {
    const { id, value } = data;

    return await prisma.supplier.update({
      where: { id },
      data: { name: value },
    });
  },

  async delete(id) {
    return await prisma.supplier.delete({ where: { id } });
  },
};
