import { signIn } from "@/utils/db/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { fullname, email, password } = credentials as {
          fullname: string;
          email: string;
          password: string;
        };

        const user: any = await signIn({ email });
        if (user) {
          const validPassword = await compare(password, user.password);
          if (validPassword) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, account, profile, user }: any) => {
      if (account?.provider === "credentials") {
        token.email = user?.email;
        token.fullname = user?.fullname;
        token.role = user?.role;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
