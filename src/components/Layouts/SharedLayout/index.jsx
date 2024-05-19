import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header';
import Loader from 'components/UI/Loader';

import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
