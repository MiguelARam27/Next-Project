import '@/styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
// import { parseCookies } from '../helpers/index';
import cookie from 'cookie';
import { redirectUser } from '@/helpers/redirectUser';
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
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

  return {};
};
