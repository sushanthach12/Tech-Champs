import SignToken from "@/utils/SignToken";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { getSession } from "next-auth/react";
import { ConvertToBase64 } from "@/utils/ConvertToBase";

export const authoptions = {
    pages: {
        signIn: '/login'
    },
    providers: [
        // CredentialsProvider({
        //     id: "credentials-login",
        //     async authorize(credentials, req) {
        //         const user = {
        //             "email": credentials?.email,
        //             "password": credentials?.password
        //         }
        //         const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/authenticate/login`)
        //         const response = await res.json();
        //         console.log(response.Success);

        //         if(user) {
        //             return user
        //         }else{
        //             return null
        //         }
        //     }
        // }),
        // CredentialsProvider({
        //     id: "credentials-signup",
        //     async authorize(credentials, req) {
        //         const userExists = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/signup`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-type': 'application/json'
        //             },
        //             body: JSON.stringify({ email: credentials?.email })
        //         })
        //         if (!userExists) {

        //         }
        //         const user = {
        //             "username": credentials?.username,
        //             "email": credentials?.email,
        //             "password": credentials?.password
        //         }
        //         if (user) {
        //             return user
        //         } else {
        //             return null
        //         }
        //     }
        // }),
        GoogleProvider({
            id: "google",
            checks: 'both',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
            },

            async authorize(credentials, req) {
                console.log(credentials);
                return true;
            }
        })
    ],

    secret: process.env.NEXT_PUBLIC_JWT_SECRET,

    callbacks: {
        async jwt({ token, user, account }) {

            if (account | user) {
                const TOKEN = await SignToken(user?.email);
                user.accessToken = TOKEN;
            }

            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            return session;
        }
    },

    events: {
        async signIn(message) {
            console.log(message)
            // const base64 = await ConvertToBase64(message?.user?.image);
            const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/googleLogin`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ name: message?.user.name, email: message?.user?.email, password: message?.user?.id, image: message?.user?.image })
            });
            const response = await res.json()
            message.user.accessToken = response.AuthToken;
        }
    }
}

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST }