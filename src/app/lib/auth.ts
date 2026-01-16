import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from "./prisma";
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "../utils/password";
import { getUserFromDb } from "../utils/getUserFromDb";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
        credentials: {
           email: { type: "email", label: "Email", placeholder: "Digite seu endereço de email" },
           name: { type: "text", label: "Name", placeholder: "Digite seu nome" },
           password: { type: "password", label: "Password", placeholder: "Digite sua senha" },
           confirmPassword: { type: "password", label: "Confirm Password", placeholder: "Confirme sua senha" },
},
authorize: async (credentials) => {
  let user = null;

  if (typeof credentials.password !== "string") {
    throw new Error("Senha inválida");
  }
  const pwHash = await saltAndHashPassword(credentials.password);

  if (typeof credentials.email !== "string") {
    throw new Error("Email inválido");
  }
  user = await getUserFromDb(credentials.email, pwHash)
 
  if (!user) {
    throw new Error("invalido credenciasis")
  }

  return user
    },
  }),
  ],
  pages: {
    signIn: "/dasboaredd",
    error: "/auth/error/teste",
  },
callbacks: {
  async jwt({ token, user }) {
    // Quando o usuário loga pela primeira vez, user existe
    if (user) {
      token.id = user.id;
    }
    return token;
  },
  async session({ session, token }) {
    if (session.user) {
      // só seta se realmente existir
      if (typeof token.id === "string") {
        session.user.id = token.id;
      }
    }
    return session;
  },
},

});