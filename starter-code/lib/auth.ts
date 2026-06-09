import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      enabled: true,
      clientId: "",
      clientSecret: "",
    },
    google: {
      enabled: true,
      clientId: "",
      clientSecret: "",
    },
  },
});
