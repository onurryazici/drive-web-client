import React, { Component } from 'react'
import '../../../assets/Style.css'
import {ReactComponent as Copy} from '../../../assets/svg/actionbar-icons/copy.svg'
import {ReactComponent as Move} from '../../../assets/svg/actionbar-icons/move.svg'
import {ReactComponent as Rename} from '../../../assets/svg/actionbar-icons/rename.svg'
import {ReactComponent as Share} from '../../../assets/svg/actionbar-icons/share.svg'
import {ReactComponent as Remove} from '../../../assets/svg/actionbar-icons/remove.svg'
import {ReactComponent as Plus} from '../../../assets/svg/actionbar-icons/plus.svg'
import {ReactComponent as Upload} from '../../../assets/svg/actionbar-icons/upload.svg'
function Actionbar(){
    return(
        <div id="actionbar-stage">
            <button type="button" class="actionbar-button btn shadow-none">
                <div className="actionbar-icon"><Plus/></div>
                <div className="actionbar-text">Yeni klasör</div>
            </button>

            <button type="button" class="actionbar-button btn shadow-none">
                <div className="actionbar-icon"><Upload/></div>
                <div className="actionbar-text">Yükle</div>
            </button>


        </div>
    )
}
export default Actionbar;