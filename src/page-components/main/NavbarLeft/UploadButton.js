import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../assets/Style.css'
import { faUpload, faFolderPlus, faFileUpload, faDatabase, faNetworkWired, faTrash } from "@fortawesome/free-solid-svg-icons";
export default class UploadButton extends Component{
    render(){
        return(
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle upload-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                    style={{width:'100%', height:'60px', fontSize:'18px',borderRadius:'0px', border:'none',background:'#ffc107',marginBottom:'10px',marginTop:'1px', textAlign:'left',paddingLeft:'25px'}}>
                    Yeni
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{marginTop:'-10px',width:'245px'}}>
                    
                    <a className="dropdown-item sidenav-a" href="\#">
                    <FontAwesomeIcon icon={faFolderPlus} className="sidenav-icons"/><div>Yeni Klasör</div>
                    </a>
                    
                    <div className="dropdown-divider" style={{color:'#000'}}></div>
                    
                    <a className="dropdown-item sidenav-a" href="\#">
                        <FontAwesomeIcon icon={faFileUpload} className="sidenav-icons" style={{marginRight:'15px'}}/><div>Klasör Yükle</div>
                    </a>
                    
                    <a className="dropdown-item sidenav-a" href="\#">
                        <FontAwesomeIcon icon={faUpload} className="sidenav-icons"/>Dosya Yükle
                    </a>
                </div>
            </div>
        )
    }
}