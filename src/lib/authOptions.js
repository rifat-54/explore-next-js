import dbConnect, { collectionName } from "./dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOption = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        // email: { label: "Email", type: "email" },
      },
      async authorize(credentials, req) {
        // console.log("creadentisal->", credentials);
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        const { username, password } = credentials;

        const user = await dbConnect(collectionName.TEST_USER).findOne({
          username,
        });

        const isOkay = password == user.password;

        if (isOkay) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        try {
          const { provider, providerAccountId } = account;
          const { email: user_email, name, image } = user;
          const payload = {
            role: "user",
            provider,
            providerAccountId,
            user_email,
            name,
            image,
          };

          const userCollections=dbConnect(collectionName.TEST_USER)

          const isExit=await userCollections.findOne({providerAccountId})
          if(!isExit){
            await userCollections.insertOne(payload)
          }
          
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },

    async session({ session, token, user }) {
      if (token) {
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
  },
};
