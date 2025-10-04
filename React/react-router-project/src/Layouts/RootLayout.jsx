import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
              <div>
            <Navbar></Navbar>
           <main className=' min-h-[calc(100vh-357px)] '> welcome to home</main>
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;