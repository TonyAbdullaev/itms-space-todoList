import React from 'react';
import {SFooter, SHeader, SMain} from "../assets/styles/app.styles";
import {Outlet} from "react-router-dom";
import logo from "../assets/icons/logo.png"

const CLayout: React.FC = () => {
    return (
        <>
            <SHeader>
                <img style={{ width: '100px', height: '50px'}} src={logo} alt="Logo"/>
            </SHeader>
            <SMain>
                <Outlet/>
            </SMain>
            <SFooter>
                ©2023 Tokhirbek Abdullaev
            </SFooter>

        </>
    );
};

export default CLayout;