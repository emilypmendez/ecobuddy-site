/* eslint-disable @typescript-eslint/no-shadow */
// React
import { useEffect } from 'react';

// Firebase
import { signInWithRedirect, GoogleAuthProvider, signOut } from 'firebase/auth';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

// Page
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { auth } from '../config/firebase';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [user] = useAuthState(auth);

  const googleAuthProvider = new GoogleAuthProvider();

  const login = async () => {
    const signin = await signInWithRedirect(auth, googleAuthProvider);
    return signin;
  };

  const logout = async () => {
    const signout = await signOut(auth);
    return signout;
  };

  useEffect(() => {
    // console.log(user);
    // logout();
  }, [user]);

  // Current user session
  const CurrentUser = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }

    if (user) {
      return (
        <div>
          <p>Logged in as: {user.displayName},</p>
          <p>{user.email}</p>
          <button onClick={logout} className="button">
            Click to Log out
          </button>
        </div>
      );
    }

    return (
      <button onClick={login} className="button">
        Sign in
      </button>
    );
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">
              <a>{<CurrentUser />}</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'The modern way for students to\n'}
              <span className="text-primary-700">build a great reputation</span>
            </>
          }
          description="The easiest way to build your career in seconds."
          button={
            <Link href="/app/signin">
              <a>
                <Button xl>Get Access Now</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
