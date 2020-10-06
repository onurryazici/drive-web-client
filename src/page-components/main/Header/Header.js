import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import Search from './Search'
import User from './User'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {

    state = {
        isOpen: false
    };
    
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <div className="menu-stage">
                <div className="logo-stage">
                    <Link to= "/"><img src={logo} alt=""/></Link>
                </div>
                <Search/>
                <ul className="user-menu-ul">
                    <li>
                        <Link to="/">
                            <span style={{color:'#ffc107', fontSize:'12px'}}>
                                <FontAwesomeIcon icon={faCog} size='3x'/>
                            </span>
                           
                        </Link> 
                    </li>
                    <li>
                    <div className="dropdown" onClick={this.toggleOpen}>
                        <button className="btn shadow-none" type="button" id="user-dropdown-button" data-toggle="dropdown" aria-haspopup="true">
                                <div id="user-dropdown-info">Onur Yazıcı</div>
                                <div id="user-dropdown-image">
                                    <span>
                                        <FontAwesomeIcon icon={faUserCircle}/>
                                    </span>
                                </div>
                        </button>
                        <div className={menuClass} id="user-dropdown-context" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item btn-warning" href="#nogo">
                            Profil
                        </a>
                        <a className="dropdown-item btn-warning" href="#nogo">
                            Çıkış yap
                        </a>
                        </div>
                    </div>
                    </li>
                    
                    
                </ul>
            </div>
        )
    }
}
