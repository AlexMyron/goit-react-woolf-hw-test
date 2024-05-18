import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'components/UI/Loader';
import Sidebar from 'components/Sidebar';
import ProgressBar from 'components/UI/ProgressBar';

import styles from './SharedCatalogLayout.module.css';
import { PaginationProvider } from 'ctx/store';

const SharedCatalogLayout = () => {
  return (
    <section className={styles.section}>
      <PaginationProvider>
      <ProgressBar />
        <Sidebar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PaginationProvider>
      <ToastContainer />
    </section>
  );
};

export default SharedCatalogLayout;
