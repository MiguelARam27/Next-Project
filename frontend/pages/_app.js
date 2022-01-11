import '@/styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
// import { parseCookies } from '../helpers/index';
import { API_URL } from '@/config/index';
import cookie from 'cookie';
import { redirectUser } from '@/helpers/redirectUser';
import Layout from '@/components/Layout';
function MyApp({ Component, pageProps, props: { socialLinks } }) {
  return (
    <AuthProvider>
      <Layout socialLinks={socialLinks}>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ ctx }) => {
  const { req } = ctx;

  const { token } = cookie.parse(req ? req.headers.cookie || '' : '');

  const protectedRoutes =
    ctx.pathname === '/account/dashboard' ||
    ctx.pathname === '/events/edit/[id]';

  if (!token) {
    protectedRoutes && redirectUser(ctx, '/account/login');
  }

  const facebookRes = await fetch(`${API_URL}/facebook-link`);
  const facebookdata = await facebookRes.json();

  console.log(facebookdata);
  const socialLinks = {
    facebook: facebookdata,
  };

  return {
    props: {
      socialLinks: socialLinks,
    },
  };
};
