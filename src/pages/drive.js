import React, { Component } from 'react'
import Header from  '../page-components/main/Header/Header'
import Content from  '../page-components/main/MainWindow/Contents'
import NavbarLeft from  '../page-components/main/NavbarLeft/NavbarLeft'


import MainContainer from '../page-components/main/MainWindow/MainContainer'
import '../assets/Style.css'
function Drive(){
    return(
        <div>
            <Header/>

            <NavbarLeft/>
            <MainContainer/>
        </div>
    );
}

export default Drive;