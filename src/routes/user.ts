import { FastifyTypedInstance } from "../types";

export const UserRoutes = async (fastify: FastifyTypedInstance) => {
  fastify.get("/user", (req, reply) => {
    return null;
  });
};
