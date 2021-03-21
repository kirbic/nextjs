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

    // extract permissions array from accesstoken
    if (!accessToken) throw new Error("invalid kirbic config");
    const decoded_id_token = jwt.decode(accessToken);
    if (!decoded_id_token) throw new Error("cannot decode kirbic idToken");

    return {
      user: {
        user_id: user.sub,
        email: user.email,
        nickname: user.nickname,
        name: user.name,
        picture: user.picture,
        permissions: (decoded_id_token as any).permissions,
      },
      access_token: accessToken || null,
    };
  }
  return { user: null, access_token: null };
};
