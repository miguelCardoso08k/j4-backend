import { UserController } from "../controllers/user";
import { AuthMiddleware } from "../middleware/middleware";
import { UserSchemas } from "../schemas/user";
import { FastifyTypedInstance } from "../types";

export const UserRoutes = (fastify: FastifyTypedInstance) => {
  fastify.get("/user", { schema: UserSchemas.getAll }, UserController.getAll);

  fastify.get(
    "/user/",
    { schema: UserSchemas.getByName },
    UserController.getByName
  );

  fastify.get(
    "/user/:id",
    { schema: UserSchemas.getById },
    UserController.getById
  );

  fastify.post("/user", { schema: UserSchemas.signUp }, UserController.signUp);

  fastify.post("/user/signIn", { schema: UserSchemas.signIn }, (req, reply) => {
    return reply.code(200).send({ user: {} });
  });

  fastify.post(
    "/user/:id/signOut",
    { schema: UserSchemas.signOut },
    (req, reply) => {
      return reply.code(200).send({ user: {} });
    }
  );

  fastify.put(
    "/user/:id/email",
    { schema: UserSchemas.updateEmail },
    UserController.updateEmail
  );

  fastify.put(
    "/user/:id/password",
    { schema: UserSchemas.updatePassword },
    (req, reply) => {
      return reply.code(200).send({ user: {} });
    }
  );

  fastify.put(
    "/user/:id/phone",
    { schema: UserSchemas.updatePhone },
    (req, reply) => {
      return reply.code(200).send({ user: {} });
    }
  );

  fastify.delete(
    "/user/:id",
    { schema: UserSchemas.delete },
    UserController.delete
  );
};
