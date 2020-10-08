import React, { useState} from 'react'
import {Button, Modal,Form } from 'react-bootstrap'
import {ReactComponent as Plus} from '../../src/assets/svg/actionbar-icons/plus.svg'

function CreateFolderModal(){
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button type="button" class="actionbar-button btn shadow-none" onClick={() => setModalShow(true)}>
                <div className="actionbar-icon"><Plus/></div>
                <div className="actionbar-text">Yeni klasör</div>
      </button>

      <Modal show={modalShow} onHide={()=>setModalShow(false) } size="s" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Yeni Klasör
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        <Form>
          <Form.Group controlId="formFolderName">
            <Form.Control type="text" placeholder="Adsız Klasör" autoComplete="false"  />
          </Form.Group>
        </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setModalShow(false)} variant="outline-dark">Close</Button>
        <Button onClick={()=>setModalShow(false)} variant="warning">Oluştur</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
export default CreateFolderModal;
