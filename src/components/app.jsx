import React, { useEffect,useState } from 'react';
import Header from './common/header-component/header';
import Sidebar from './common/sidebar-component/sidebar';
import SidebarUser from './common/sidebar-component/sidebarUser';
import RightSidebar from './common/right-sidebar';
import Footer from './common/footer';
import ThemeCustomizer from './common/theme-customizer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Loader from './common/loader';
import Signin from '../auth/signin';
import signup from '../pages/signup';
import axios from 'axios'


const AppLayout = ({ children }) => {

    
    const token = localStorage.getItem("token")
    const designation = localStorage.getItem("designation")
    console.log(designation)

    return (

        <div>
            <Route
              path={`${process.env.PUBLIC_URL}/pages/signup`}
              component={signup}
            />

            <Loader />
            { token == null ? <Signin /> :
                <div className="page-wrapper">
                    <div className="page-body-wrapper">
                        {designation == "user" ? <SidebarUser/>: <Sidebar />}
                        <Header />
                        {/* <SidebarUser/> */}
                        <RightSidebar />
                        <div className="page-body">
                            {children}
                            
                        </div>
                        <Footer />
                        {/*<ThemeCustomizer />*/}
                    </div>
                    
                </div>
                

            }
            <ToastContainer />

        </div>
    );
}

export default AppLayout;