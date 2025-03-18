import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { UserRoutes } from "./routes/user";

const fastify = Fastify({
  // logger: true,
}).withTypeProvider<ZodTypeProvider>();

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

fastify.register(fastifyCors, { origin: "*" });
fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: "J4 API",
      version: "1.0.0",
    },
  },
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
