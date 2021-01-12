import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'
export default class UploadButton extends Component{
    render(){
        return(

                    <Dropdown >
                        <Dropdown.Toggle variant="warning" id="dropdown-basic" style={{width:"100%",height:'50px'}}>
                            Yeni
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{width:"100%"}} variant="warning"> 
                            <Dropdown.Item href="#/action-1" variant="warning">Klasör </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Dosya yükleme</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Klasör yükleme</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            
            
        )
    }
}