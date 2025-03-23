import React from 'react'
import {Outlet} from "react-router-dom";
import Footer from '../layout/Footer';

const AboutContainer = () => {
  return (
    <div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default AboutContainer