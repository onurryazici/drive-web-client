import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProgressBar from 'react-bootstrap/ProgressBar'
import UploadButton from './UploadButton'
import {Link} from 'react-router-dom';
import '../../../assets/Style.css'
//import { faUpload, faFolderPlus, faFileUpload, faDatabase, faNetworkWired, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class NavbarLeft extends Component {
    render() {
        return (         
            <div className="sidenav">
                <div className="sidenavInner">
                <UploadButton></UploadButton>

                <ul className="sidenav-ul">
                    <li className="sidenav-active">
                        <a href="\">Drive'ım</a>
                    </li>
                    <li>
                        <a href="\shared-with-me">Benimle paylaşılanlar</a>
                    </li>
                    <li>
                        <a href="\trash">Çöp Kutusu</a>
                    </li>
                    <li>
                        <a href="\settings">Ayarlar</a>
                    </li>
                </ul>
                
                <div className="card" style={{background:'#343a40'}}>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{background:'#343a40', color:'#fff',fontSize:'14px',textAlign:'left'}}>Kullanılan depolama alanı</li>
                    <li className="list-group-item" style={{background:'#343a40',color:'#fff'}}>
                   <ProgressBar variant="success" now={40} />
                   <span style={{fontSize:'13px',color:'#dedede'}}>16 Gb üzerinden 3Gb kullanılıyor</span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            
        )
    }
}
