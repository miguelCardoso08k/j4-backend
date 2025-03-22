import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction,
} from "fastify";

export let invalidTokens: string[] = [];

export const AuthMiddleware = async (
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

  try {
    await req.jwtVerify();
    console.log(req.user);
    done();
  } catch (error) {
    reply.status(401).send({ message: "Token inválido" });
  }
};
