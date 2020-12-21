import React, { Component } from 'react'
import Placemap from '..//MainWindow/Placemap'
import FolderDetails from '../MainWindow/FolderDetails'
import Actionbar from '../MainWindow/Actionbar'
import Contents from '../MainWindow/Contents'
import '../../../assets/Style.css'
import RFM from 'react-file-manager-rfm'
import 'react-file-manager-rfm/dist/index.css'
function MainContainer(){
    return(
        <div id="main-container">
        <RFM/>
        </div>
        /*<div id="main-container">
             <Actionbar/>
             <div style={{clear:"both"}}></div>
             <Placemap/>
             <Contents/>
             <div style={{clear:"both"}}></div>
             <FolderDetails folderCount="10" fileCount="2"/>
    </div>*/
    )
}

export default MainContainer;