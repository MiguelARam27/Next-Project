import { API_URL } from '@/config/index';
import cookie from 'cookie';
export default async (req, res) => {
  if (req.method === 'POST') {
    //destroy cookie
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: new Date(0), // 1 day cookie expire time
        sameSite: 'strict',
        path: '/',
      })
    );

    res.status(200).json({ message: 'Succes' });
  } else {
    res
      .status(data.statusCode)
      .json({ message: data.message[0].messages[0].message });
  }
};
