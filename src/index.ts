import { handleAuth } from "@auth0/nextjs-auth0";
import { UserProvider as Auth0UserProvider } from "@auth0/nextjs-auth0";
import { useUser as auth0useUser } from "@auth0/nextjs-auth0";

// Automatically set kirbic domain
process.env.AUTH0_ISSUER_BASE_URL = "https://YOUR_AUTH0_DOMAIN.auth0.com";

// A long secret value used to encrypt the session cookie
process.env.AUTH0_SECRET = process.env.KIRBIC_SECRET;

// The base url of your application
process.env.AUTH0_BASE_URL = process.env.KIRBIC_BASE_URL;

// The url of your Auth0 tenant domain
process.env.AUTH0_ISSUER_BASE_URL = "https://kirbic.auth0.com";

// Your Auth0 application's Client ID
process.env.AUTH0_CLIENT_ID = process.env.KIRBIC_CLIENT_ID;

// Your Auth0 application's Client Secret
process.env.AUTH0_CLIENT_SECRET = process.env.KIRBIC_CLIENT_SECRET;

export const handle_auth = handleAuth;
export const UserProvider = Auth0UserProvider;
export const useUser = auth0useUser;
