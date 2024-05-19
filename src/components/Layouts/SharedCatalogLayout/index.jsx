import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppCtxProvider } from 'ctx/store';

import Loader from 'components/UI/Loader';
import Sidebar from 'components/Sidebar';
import ProgressBar from 'components/UI/ProgressBar';

import styles from './SharedCatalogLayout.module.css';

const SharedCatalogLayout = () => {
  return (
    <section className={styles.section}>
      <AppCtxProvider>
        <ProgressBar />
        <Sidebar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AppCtxProvider>
      <ToastContainer />
    </section>
  );
};

export default SharedCatalogLayout;
