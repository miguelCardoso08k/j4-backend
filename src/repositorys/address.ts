import { prisma } from "../config/prisma-client";
import { AddressRepositoryPrisma } from "../interfaces/address";

export const AddressRepository: AddressRepositoryPrisma = {
  async create(data) {
    const { cep, city, neighborhood, number, state, street, complement } = data;
    return await prisma.address.create({
      data: { cep, city, neighborhood, number, state, street, complement },
    });
  },

  async getAll() {
    return await prisma.address.findMany({});
  },

  async getById(id) {
    return await prisma.address.findUnique({ where: { id } });
  },

  async getByValue(value) {
    return await prisma.address.findMany({
      where: {
        OR: [
          { city: { contains: value } },
          { street: { contains: value } },
          { neighborhood: { contains: value } },
          { cep: { contains: value } },
        ],
      },
      orderBy: { city: "asc" },
    });
  },

  async updateCep(data) {
    const { id, value } = data;

    return await prisma.address.update({
      where: { id },
      data: { cep: value },
    });
  },

  async updateCity(data) {
    const { id, value } = data;

    return await prisma.address.update({
      where: { id },
      data: { city: value },
    });
  },

  async updateComplement(data) {
    const { id, value } = data;

    return await prisma.address.update({
      where: { id },
      data: { complement: value },
    });
  },

  async updateNeighborhood(data) {
    const { id, value } = data;

    return await prisma.address.update({
      where: { id },
      data: { neighborhood: value },
    });
  },

  async updateNumber(data) {
    const { id, value } = data;

    return await prisma.address.update({
      where: { id },
      data: { number: value },
    });
  },

  async updateState(data) {
    const { id, value } = data;

    return await prisma.address.update({
      where: { id },
      data: { state: value },
    });
  },

  async updateStreet(data) {
    const { id, value } = data;

    return await prisma.address.update({
      where: { id },
      data: { street: value },
    });
  },

  async delete(id) {
    return await prisma.address.delete({ where: { id } });
  },
};
