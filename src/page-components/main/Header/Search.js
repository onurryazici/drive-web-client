import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default class Search extends Component {
    render() {
        return (
            <div class="input-group mb-3 search-stage" style={{width:'30%'}} >
                <input type="text" class="form-control" placeholder="Datagram'da ara" aria-label="Datagram'da ara" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-warning" type="button" id="button-addon2" style={{height:'38px'}}>Ara</button>
                </div>
            </div>
        )
    }
}
