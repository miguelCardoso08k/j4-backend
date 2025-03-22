import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { UserServices } from "../services/user";
import { UserSchemas } from "../schemas/user";
import { CreateUser } from "../interfaces/user";

export const UserController = {
  async signUp(req: FastifyRequest<{ Body: CreateUser }>, reply: FastifyReply) {
    try {
      const user = await UserServices.create(req.body);

      if (!user)
        return reply.code(404).send({ message: "user not found", user });

      return reply.code(200).send({ message: "user created", user });
    } catch (error) {
      return reply.code(500).send({ message: "unexpected e  rror", error });
    }
  },

  async getAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await UserServices.getAll();

      if (users?.length === 0) {
        return reply.code(404).send({ message: "users not found", users });
      }

      return reply.code(200).send({ message: "users found", users });
    } catch (error) {
      return reply.code(500).send({ message: "unexpected error", error });
    }
  },

  async getByName(
    req: FastifyRequest<{ Querystring: { name: string } }>,
    reply: FastifyReply
  ) {
    try {
      const users = await UserServices.getByName(req.query.name);

      if (users?.length === 0) {
        return reply.code(404).send({ message: "users not found", users });
      }

      return reply.code(200).send({ message: "users found", users });
    } catch (error) {
      return reply.code(500).send({ message: "unexpected error", error });
    }
  },

  async getById(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const user = await UserServices.getById(req.params.id);

      if (!user) {
        return reply.code(404).send({ message: "user not found", user });
      }

      return reply.code(200).send({ message: "user found", user });
    } catch (error) {
      return reply.code(500).send({ message: "unexpected error", error });
    }
  },

  async updateEmail(
    req: FastifyRequest<{ Params: { id: string }; Body: { value: string } }>,
    reply: FastifyReply
  ) {
    try {
      const user = await UserServices.updateEmail({
        id: req.params.id,
        value: req.body.value,
      });

      if (!user) {
        return reply.code(404).send({ message: "user not found", user });
      }

      return reply.code(200).send({ message: "user updated email", user });
    } catch (error) {
      return reply.code(500).send({ message: "unexpected error", error });
    }
  },

  async delete(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const user = await UserServices.delete(req.params.id);
      console.log(user);

      if (!user) {
        return reply.code(404).send({ message: "user not found", user });
      }

      return reply.code(200).send({ message: "user deleted", user });
    } catch (error) {
      return reply.code(500).send({ message: "unexpected error", error });
    }
  },
};
