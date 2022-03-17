import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default nextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "text" }
            },
            async authorize(credentials, req) {
                if (credentials?.username === "admin") throw new Error("oops, no admin");

                if (credentials?.password === "1234") throw new Error("password so easy");

                const user = {
                    id: 1,
                    name: "Tony Stark",
                    email: "tony_avenger@gmail.com"
                }
                
                return user;
            },
        })
    ],
    callbacks: {
        async session({ session, token, user }){
            session.role = "Bilionire";
            return session;
        }
    }
});