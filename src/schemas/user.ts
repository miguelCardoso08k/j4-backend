import { FastifySchema } from "fastify";
import z from "zod";

interface UserSchemaInterface {
  getAll: FastifySchema;
  getByName: FastifySchema;
  getById: FastifySchema;
  signIn: FastifySchema;
  signUp: FastifySchema;
  signOut: FastifySchema;
  updateEmail: FastifySchema;
  updatePassword: FastifySchema;
  updatePhone: FastifySchema;
  delete: FastifySchema;
}

export const phoneRegex = /\d{2}\s\d{4,5}-\d{4}$/;

export const UserSchemas: UserSchemaInterface = {
  getAll: {
    tags: ["User"],
    description: "Get all users",
    response: {
      200: z.object({
        message: z.literal("users found"),
        users: z
          .array(
            z.object({
              id: z.string().cuid(),
              firstName: z.string(),
              lastName: z.string(),
              phone: z.string().regex(phoneRegex),
              email: z.string().email(),
              password: z.string(),
            })
          )
          .describe("Users Found"),
      }),
      404: z.object({
        message: z.literal("users not found"),
        users: z.array(z.object({})).describe("Not found users"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  getByName: {
    tags: ["User"],
    description: "Get users by name. \n In ascending alphabetical order",
    querystring: z.object({ name: z.string() }),
    response: {
      200: z.object({
        message: z.literal("users found"),
        users: z
          .array(
            z.object({
              id: z.string().cuid(),
              firstName: z.string(),
              lastName: z.string(),
              phone: z.string().regex(phoneRegex),
              email: z.string().email(),
              password: z.string(),
            })
          )
          .describe("Users Found"),
      }),
      404: z.object({
        message: z.literal("users not found"),
        users: z.array(z.object({})).describe("Not found users"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  getById: {
    tags: ["User"],
    description: "Get the user.",
    params: z.object({ id: z.string().cuid() }),
    response: {
      200: z.object({
        message: z.literal("user found"),
        user: z
          .object({
            id: z.string().cuid(),
            firstName: z.string(),
            lastName: z.string(),
            phone: z.string().regex(phoneRegex),
            email: z.string().email(),
            password: z.string(),
          })
          .describe("User Found"),
      }),
      404: z.object({
        message: z.literal("user not found"),
        user: z.object({}).describe("Not found user"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  signUp: {
    tags: ["User"],
    description: "Create a user.",
    body: z.object({
      firstName: z.string(),
      lastName: z.string(),
      phone: z.string().regex(phoneRegex),
      email: z.string().email(),
      password: z.string().min(8).max(12),
    }),
    response: {
      201: z.object({
        message: z.literal("user created"),
        user: z
          .object({
            id: z.string().cuid(),
            firstName: z.string(),
            lastName: z.string(),
            phone: z.string().regex(phoneRegex),
            email: z.string().email(),
            password: z.string(),
            token: z.string().jwt(),
          })
          .describe("User created"),
      }),
      404: z.object({
        message: z.literal("user not found"),
        user: z.object({}).describe("Not found user"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  signIn: {
    tags: ["User"],
    description: "Create a user.",
    body: z.object({
      email: z.string().email(),
      password: z.string().min(8).max(12),
    }),
    response: {
      200: z.object({
        message: z.literal("user logged"),
        user: z
          .object({
            id: z.string().cuid(),
            firstName: z.string(),
            lastName: z.string(),
            phone: z.string().regex(phoneRegex),
            email: z.string().email(),
            password: z.string(),
            token: z.string().jwt(),
          })
          .describe("User logged"),
      }),
      404: z.object({
        message: z.literal("user not found"),
        user: z.object({}).describe("Not found user"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  signOut: {
    tags: ["User"],
    description: "Create a user.",
    params: z.object({ id: z.string().cuid() }),
    response: {
      200: z.object({
        message: z.literal("user logged out"),
        user: z
          .object({
            id: z.string().cuid(),
            firstName: z.string(),
            lastName: z.string(),
            phone: z.string().regex(phoneRegex),
            email: z.string().email(),
            password: z.string(),
            token: z.string().jwt(),
          })
          .describe("User logged out"),
      }),
      404: z.object({
        message: z.literal("user not found"),
        user: z.object({}).describe("Not found user"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  updateEmail: {
    tags: ["User"],
    description: "User update your email",
    params: z.object({ id: z.string().cuid() }),
    body: z.object({ value: z.string().email() }),
    response: {
      200: z.object({
        message: z.literal("user updated email"),
        user: z
          .object({
            id: z.string().cuid(),
            firstName: z.string(),
            lastName: z.string(),
            phone: z.string().regex(phoneRegex),
            email: z.string().email(),
            password: z.string(),
          })
          .describe("User updated email"),
      }),
      404: z.object({
        message: z.literal("user not found"),
        user: z.object({}).describe("Not found user"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  updatePassword: {
    tags: ["User"],
    description: "User updated your password",
    params: z.object({ id: z.string().cuid() }),
    body: z.object({ value: z.string().min(8).max(12) }),
    response: {
      200: z.object({
        message: z.literal("user updated password"),
        user: z
          .object({
            id: z.string().cuid(),
            firstName: z.string(),
            lastName: z.string(),
            phone: z.string().regex(phoneRegex),
            email: z.string().email(),
            password: z.string(),
          })
          .describe("User updated password"),
      }),
      404: z.object({
        message: z.literal("user not found"),
        user: z.object({}).describe("Not found user"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  updatePhone: {
    tags: ["User"],
    description: "User updated your phone",
    params: z.object({ id: z.string().cuid() }),
    body: z.object({ value: z.string().regex(phoneRegex) }),
    response: {
      200: z.object({
        message: z.literal("user updated phone"),
        user: z
          .object({
            id: z.string().cuid(),
            firstName: z.string(),
            lastName: z.string(),
            phone: z.string().regex(phoneRegex),
            email: z.string().email(),
            password: z.string(),
          })
          .describe("User updated phone"),
      }),
      404: z.object({
        message: z.literal("user not found"),
        user: z.object({}).describe("Not found user"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },

  delete: {
    tags: ["User"],
    description: "User delete your acount",
    params: z.object({ id: z.string().cuid() }),
    response: {
      200: z.object({
        message: z.literal("user deleted"),
        user: z
          .object({
            id: z.string().cuid(),
            firstName: z.string(),
            lastName: z.string(),
            phone: z.string().regex(phoneRegex),
            email: z.string().email(),
            password: z.string(),
            token: z.string().jwt(),
          })
          .describe("User deleted"),
      }),
      404: z.object({
        message: z.literal("user not found"),
        user: z.object({}).describe("Not found user"),
      }),

      500: z.object({ message: z.literal("unexpected error") }),
    },
  },
};
