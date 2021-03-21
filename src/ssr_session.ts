import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@auth0/nextjs-auth0";

type KirbicUser = {
  user_id: string;
  email: string;
  nickname: string;
  name: string;
  picture: string;
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
    const { user } = session;
    return {
      user: {
        user_id: user.sub,
        email: user.email,
        nickname: user.nickname,
        name: user.name,
        picture: user.picture,
      },
      access_token: session.access_token,
    };
  }
  return { user: null, access_token: null };
};
