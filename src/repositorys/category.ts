import { prisma } from "../config/prisma-client";
import { CategoryRepositoryPrisma } from "../interfaces/category";

export const CategoryRepository: CategoryRepositoryPrisma = {
  async create(data) {
    const { name } = data;

    return await prisma.category.create({ data: { name } });
  },

  async getAll() {
    return await prisma.category.findMany({});
  },

  async getById(id) {
    return await prisma.category.findUnique({ where: { id } });
  },

  async getByName(name) {
    return await prisma.category.findMany({
      where: { name: { contains: name } },
      orderBy: { name: "asc" },
    });
  },

  async updateName(data) {
    const { id, value } = data;

    return await prisma.category.update({
      where: { id },
      data: { name: value },
    });
  },

  async delete(id) {
    return await prisma.category.delete({ where: { id } });
  },
};
