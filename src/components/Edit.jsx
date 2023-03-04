import React, { useState } from 'react';
import {Form , Button , Modal} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { editTask } from '../JS/actions/actions';


function Edit({task}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [newText , setNewText]  = useState(task.text);

  const handleEdit = (e)=>{
    e.preventDefault()
    dispatch(editTask(task.id , newText))
    handleClose()
  }

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleEdit}>
      <Form.Group className="mb-3" >
        <Form.Label>Add Task</Form.Label>
        <Form.Control onChange={(e)=>setNewText(e.target.value)} value={newText} type="text" placeholder="Add Task..." />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Edit