import { prisma } from "../config/prisma-client";
import { BrandRepositoryPrisma } from "../interfaces/brand";

export const BrandRepository: BrandRepositoryPrisma = {
  async create(data) {
    const { name } = data;

    return await prisma.brand.create({ data: { name } });
  },

  async getAll() {
    return await prisma.brand.findMany({});
  },

  async getById(id) {
    return await prisma.brand.findUnique({ where: { id } });
  },

  async getByName(name) {
    return await prisma.brand.findMany({
      where: { name: { contains: name } },
      orderBy: { name: "asc" },
    });
  },

  async updateName(data) {
    const { id, value } = data;

    return await prisma.brand.update({
      where: { id },
      data: { name: value },
    });
  },

  async delete(id){
    return await prisma.brand.delete({where:{id}})
  }
};
