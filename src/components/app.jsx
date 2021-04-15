import React from 'react';
import Header from './common/header-component/header';
import Sidebar from './common/sidebar-component/sidebar';
import SidebarUser from './common/sidebar-component/sidebarUser';
import RightSidebar from './common/right-sidebar';
import Footer from './common/footer';
import ThemeCustomizer from './common/theme-customizer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './common/loader';
import Signin from '../auth/signin';


const AppLayout = ({ children }) => {

    const token = localStorage.getItem("token")

    return (

        <div>

            <Loader />
            { token == null ? <Signin /> :
                <div className="page-wrapper">
                    <div className="page-body-wrapper">

                        <Header />
                        {/* <SidebarUser/> */}
                        <Sidebar />
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