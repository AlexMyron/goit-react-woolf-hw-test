import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from 'components/Loader';
import Sidebar from 'components/Sidebar';

import styles from './SharedCatalogLayout.module.css'

const SharedCatalogLayout = () => {
  return (
    <section className={styles.section}>
      <Sidebar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default SharedCatalogLayout;
