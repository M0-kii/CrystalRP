import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
        }),
    ],
    session: {
        strategy: "jwt", // Using JWT strategy can often resolve session fetch issues 
    },
    callbacks: {
        session: async ({ session, token }) => {
            if (session.user && token.sub) {
                // @ts-ignore
                session.user.id = token.sub;
                // @ts-ignore
                session.user.role = token.role || "USER";
            }
            return session;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                // @ts-ignore
                token.role = user.role;
            }
            return token;
        }
    },
    pages: {
        signIn: "/auth/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
};
