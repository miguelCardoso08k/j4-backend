import { prisma } from "../config/prisma-client";
import { UserRepositoryPrisma } from "../interfaces/user";

export const UserRepository: UserRepositoryPrisma = {
  async create(data) {
    const { email, firstName, lastName, password, phone } = data;
    return await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password,
        phone,
      },
    });
  },

  async getAll() {
    return await prisma.user.findMany({});
  },

  async getById(id) {
    return await prisma.user.findUnique({ where: { id } });
  },

  async getByName(name) {
    return await prisma.user.findMany({
      where: { OR: [{ firstName: name }, { lastName: name }] },
      orderBy: { firstName: "asc" },
    });
  },

  async updateEmail(data) {
    const { id, value } = data;

    return await prisma.user.update({ where: { id }, data: { email: value } });
  },

  async updatePassword(data) {
    const { id, value } = data;

    return await prisma.user.update({
      where: { id },
      data: { password: value },
    });
  },

  async updatePhone(data) {
    const { id, value } = data;

    return await prisma.user.update({ where: { id }, data: { phone: value } });
  },

  async delete(id) {
    return await prisma.user.delete({ where: { id } });
  },
};
