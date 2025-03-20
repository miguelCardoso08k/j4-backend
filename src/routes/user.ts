import { UserSchemas } from "../schemas/user";
import { FastifyTypedInstance } from "../types";

export const UserRoutes = (fastify: FastifyTypedInstance) => {
  fastify.get("/user", { schema: UserSchemas.getAll }, async (req, reply) => {
    return reply.code(200).send({ users: [] });
  });

  fastify.get(
    "/user/",
    { schema: UserSchemas.getByName },
    async (req, reply) => {
      return reply.code(200).send({ users: [] });
    }
  );

  fastify.get("/user/{id}", { schema: UserSchemas.getById }, (req, reply) => {
    return reply.code(200).send({ user: {} });
  });

  fastify.post("/user", { schema: UserSchemas.signUp }, (req, reply) => {
    return reply.code(201).send({ user: {} });
  });

  fastify.post("/user/signIn", { schema: UserSchemas.signIn }, (req, reply) => {
    return reply.code(200).send({ user: {} });
  });

  fastify.post(
    "/user/{id}/signOut",
    { schema: UserSchemas.signOut },
    (req, reply) => {
      return reply.code(200).send({ user: {} });
    }
  );

  fastify.put(
    "/user/{id}/email",
    { schema: UserSchemas.updateEmail },
    (req, reply) => {
      return reply.code(200).send({ user: {} });
    }
  );

  fastify.put(
    "/user/{id}/password",
    { schema: UserSchemas.updatePassword },
    (req, reply) => {
      return reply.code(200).send({ user: {} });
    }
  );

  fastify.put(
    "/user/{id}/phone",
    { schema: UserSchemas.updatePhone },
    (req, reply) => {
      return reply.code(200).send({ user: {} });
    }
  );

  fastify.delete("/user/{id}", { schema: UserSchemas.delete }, (req, reply) => {
    return reply.code(200).send({ user: {} });
  });
};
