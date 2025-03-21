import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import Fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { UserRoutes } from "./routes/user";
import fastifyJwt from "@fastify/jwt";
import { auth } from "./config/auth";

const fastify = Fastify({
  // logger: true,
}).withTypeProvider<ZodTypeProvider>();

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

fastify.register(fastifyJwt, { secret: auth.secret });

fastify.register(fastifyCors, { origin: "*" });
fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: "J4 API",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});
fastify.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

fastify.register(UserRoutes);

const server = async () => {
  try {
    await fastify.listen({ port: 3333 });
    console.log("server on");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

server();
