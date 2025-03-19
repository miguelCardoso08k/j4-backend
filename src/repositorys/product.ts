import { prisma } from "../config/prisma-client";
import { ProductRepositoryPrisma } from "../interfaces/product";

export const ProductRepository: ProductRepositoryPrisma = {
  async create(data) {
    const { name, purchasePrice, salePrice, supplierId, brandId, categoryId } =
      data;

    return await prisma.product.create({
      data: { name, purchasePrice, salePrice, supplierId, brandId, categoryId },
    });
  },

  async getAll() {
    return await prisma.product.findMany({});
  },

  async getById(id) {
    return await prisma.product.findUnique({ where: { id } });
  },

  async getByName(name) {
    return await prisma.product.findMany({
      where: { name: { contains: name } },
      orderBy: { name: "asc" },
    });
  },

  async updateBrand(data) {
    const { id, value } = data;

    return await prisma.product.update({
      where: { id },
      data: { brandId: value },
    });
  },

  async updateCategory(data) {
    const { id, value } = data;

    return await prisma.product.update({
      where: { id },
      data: { categoryId: value },
    });
  },

  async updateName(data) {
    const { id, value } = data;

    return await prisma.product.update({
      where: { id },
      data: { name: value },
    });
  },

  async updatePurchasePrice(data) {
    const { id, value } = data;

    return await prisma.product.update({
      where: { id },
      data: { purchasePrice: value },
    });
  },

  async updateSalePrice(data) {
    const { id, value } = data;

    return await prisma.product.update({
      where: { id },
      data: { salePrice: value },
    });
  },

  async updateSupplier(data) {
    const { id, value } = data;

    return await prisma.product.update({
      where: { id },
      data: { supplierId: value },
    });
  },

  async delete(id) {
    return await prisma.product.delete({ where: { id } });
  },
};
