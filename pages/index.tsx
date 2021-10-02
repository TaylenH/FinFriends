import Header from '../components/Header/Header';
import { useSession } from 'next-auth/react';

const index = () => {
  let { data: session, status } = useSession();

  return (
    <>
      <Header />
      {status === 'authenticated' ? <p>{`Hello ${session.user.name} email: ${session.user.email}`}</p> : (
        status === 'loading' ? <p>Loading...</p> : <p>please sign in to continue</p>
      )}
    </>
  );
};

export default index;