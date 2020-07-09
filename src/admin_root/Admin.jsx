import React from 'react'
import { createPortal } from 'react-dom'
import './css/admin.css'
import ModalAdmin from './components/ModalAdmin'
export default function Admin(props){
    return createPortal(
      <ModalAdmin globalProps={props.globalProps}/>
    ,document.getElementById("administrador"))
}
