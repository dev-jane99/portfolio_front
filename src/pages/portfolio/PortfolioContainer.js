import React from 'react';
import {Outlet} from "react-router-dom";

const PortfolioContainer = () => {
  return (
    <div>
        <Outlet />
    </div>
  );
};

export default PortfolioContainer;