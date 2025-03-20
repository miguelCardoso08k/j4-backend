import { auth } from "../config/auth";
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

export let invalidTokens: string[] = [];

export const AuthMiddleware = (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return reply.code(401).send({ error: "Token not provided" });

  const parts = authHeader.split(" ");

  if (!(parts.length === 2))
    return reply.code(401).send({ error: "Misinformed token" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return reply.code(401).send({ error: "Invalid token format" });

  if (invalidTokens.includes(token))
    return reply.code(401).send({ error: "Invalid token" });

  done();
};
