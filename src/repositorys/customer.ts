import { prisma } from "../config/prisma-client";
import { CustomerRepositoryPrisma } from "../interfaces/customer";

export const CustomerRepository: CustomerRepositoryPrisma = {
  async create(data) {
    const {
      firstName,
      lastName,
      barbershopName,
      addressId,
      cnpj,
      cpf,
      createdAt,
      nickname,
    } = data;

    return await prisma.customer.create({
      data: {
        firstName,
        lastName,
        barbershopName,
        addressId,
        cnpj,
        cpf,
        createdAt,
        nickname,
      },
    });
  },

  async getAll() {
    return await prisma.customer.findMany({});
  },

  async getById(id) {
    return await prisma.customer.findUnique({ where: { id } });
  },

  async getByName(name) {
    return await prisma.customer.findMany({
      where: {
        OR: [
          { firstName: { contains: name } },
          { lastName: { contains: name } },
        ],
      },
      orderBy: { firstName: "asc" },
    });
  },

  async updateFirstName(data) {
    const { id, value } = data;

    return await prisma.customer.update({
      where: { id },
      data: { firstName: value },
    });
  },

  async updateLastName(data) {
    const { id, value } = data;

    return await prisma.customer.update({
      where: { id },
      data: { lastName: value },
    });
  },

  async updateBarbershopName(data) {
    const { id, value } = data;

    return await prisma.customer.update({
      where: { id },
      data: { barbershopName: value },
    });
  },

  async updateCnpj(data) {
    const { id, value } = data;

    return await prisma.customer.update({
      where: { id },
      data: { cnpj: value },
    });
  },

  async updateCpf(data) {
    const { id, value } = data;

    return await prisma.customer.update({
      where: { id },
      data: { cpf: value },
    });
  },

  async updateNickname(data) {
    const { id, value } = data;

    return await prisma.customer.update({
      where: { id },
      data: { nickname: value },
    });
  },

  async delete(id) {
    return await prisma.customer.delete({ where: { id } });
  },
};
