import React from 'react'
import RFM from 'react-file-manager-rfm'
import 'react-file-manager-rfm/dist/index.css'
import '../../../assets/Style.css'

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