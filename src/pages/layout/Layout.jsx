import S from "./style";
import Header from "./Header";
import React from "react";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
        <S.Layout>
            <Header />
            <S.Content>
                <Outlet />
            </S.Content>
        </S.Layout>
        </div>
    );
};
export default Layout;