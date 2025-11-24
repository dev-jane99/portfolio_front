import React from 'react';
import Footer from '../layout/Footer';
import S from './style';
import { Outlet } from 'react-router-dom';

const PortfolioContainer = () => {
  return (
    <div>
        <S.Projects>
          <Outlet />
        </S.Projects>
        <Footer />
    </div>
  );
};

export default PortfolioContainer;