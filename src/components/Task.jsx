import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteTask , doneTask } from '../JS/actions/actions';
import Edit from './Edit';

const Task = ({task}) => {
  const dispatch = useDispatch();

  return (
    <div style={{margin:"20px 0" , borderBottom:"1px solid black" , padding:"5px" , display:"flex" , justifyContent:"space-between"}}>
        <span className={task.isDone ? "done" : null}> {task.text} </span>
        <Edit task={task} />
        <Button variant="danger" onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>
        <Button  variant='success' onClick={()=>dispatch(doneTask(task.id))}>{task.isDone ? "unDone" : "Done"}</Button>
    </div>
  )
}

export default Task