import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import jwt from "jsonwebtoken";

type KirbicUser = {
  user_id: string;
  email: string;
  nickname: string;
  name: string;
  picture: string;
  permissions: string[];
};

type SSRSession = {
  user: KirbicUser | null;
  access_token: string | null;
};

export const ssr_session = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<SSRSession> => {
  const session = await getSession(req, res);
  if (session) {
    const { user, accessToken, idToken } = session;

    // extract permissions array from token
    const decoded_id_token: { permissions: string[] } = jwt.decode(idToken);

    return {
      user: {
        user_id: user.sub,
        email: user.email,
        nickname: user.nickname,
        name: user.name,
        picture: user.picture,
        permissions: decoded_id_token.permissions,
      },
      access_token: accessToken || null,
    };
  }
  return { user: null, access_token: null };
};
