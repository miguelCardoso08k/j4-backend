import { CreateUser } from "../interfaces/user";
import { UserRepository } from "../repositorys/user";

export const UserServices = {
  async create(data: CreateUser) {
    return await UserRepository.create(data);
  },

  async getAll() {
    return await UserRepository.getAll();
  },

  async getById(id: string) {
    return await UserRepository.getById(id);
  },

  async getByName(name: string) {
    return await UserRepository.getByName(name);
  },

  async updateEmail(data: { id: string; value: string }) {
    return await UserRepository.updateEmail(data);
  },

  async updatePassword(data: { id: string; value: string }) {
    return await UserRepository.updatePassword(data);
  },

  async updatePhone(data: { id: string; value: string }) {
    return await UserRepository.updatePhone(data);
  },

  async delete(id: string) {
    return await UserRepository.delete(id);
  },
};
