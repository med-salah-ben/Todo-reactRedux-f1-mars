import React , {useState} from 'react';
import {Form , Button} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/actions/actions';

export const AddTask = () => {
    const [text , setText] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault()
        if(text){
            dispatch(addTask({id:Math.random() , text :text , isDone : false}))
            setText("")
        }else{
            alert("can't add an empty task!!!")
        }
    }


  return (
    <div>
    <Form onSubmit={handleChange} style={{display:'flex'}}>
      <Form.Group className="mb-3" >
        <Form.Label>Add Task</Form.Label>
        <Form.Control style={{ width:"1000px"}} onChange={(e)=>setText(e.target.value)} value={text} type="text" placeholder="Add Task..." />
      </Form.Group>
      <Button style={{height:"50px" , marginTop:"25px"}} variant="primary" onClick={handleChange}>
        Add
      </Button>
    </Form>
    </div>
  )
}
