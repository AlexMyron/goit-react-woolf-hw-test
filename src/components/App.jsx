import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SharedLayout from './Layouts/SharedLayout';

import { fetchList } from '../redux/operations';
import SharedCatalogLayout from './Layouts/SharedCatalogLayout';

export const App = () => {
  const HomePage = lazy(() => import('../pages/HomePage'));
  const CatalogPage = lazy(() => import('../pages/CatalogPage'));
  const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<SharedCatalogLayout />}>
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
