import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png'
function Login(){
    return(
        <div id="login-container">
            <div id="login-box">
            <div className="login-logo-stage">
                    <Link to= "/">
                        <img src={logo} alt=""/>
                    </Link>
                    <div class="form-group">
                        
                        <input type="text" class="form-control" id="" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        
                        <input type="passowrd" class="form-control" id="" placeholder="Parola"/>
                    </div>
                    <Link to="/">
                        <button type="button" class="btn btn-warning btn-block">Giriş</button>
                    </Link>
                </div>
            </div>

            <div id="login-footer-version">
                Datagram V 1.0.0
            </div>
        </div>
    );
}

export default Login;