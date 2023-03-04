import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTasks = () => {
    const listTasks = useSelector((state)=>state.task.listTasks)

    const [status , setStatus] =useState("all")
    console.log(status)
  return (
    <>
    <div style={{display:"flex" , justifyContent:"space-around" , margin:"1rem 0  "}}>
    <Button  variant='info' onClick={()=>setStatus("all")}>All</Button>
    <Button  variant='secondary' onClick={()=>setStatus("done")}>Done</Button>
    <Button  variant='dark' onClick={()=>setStatus("undone")}>unDone</Button>
    </div>
    <div style={{border:"2px solid blue", padding:"20px 40px" , width:"100%"}}>
        {status === "done" ? listTasks.filter((el)=>el.isDone ===true )
        .map(el=><Task task={el} key={el.id} />)
        : status ==="undone" ? listTasks.filter(el=>el.isDone === false)
        .map(el=><Task task={el} key={el.id} />)
        :listTasks.map(el=><Task task={el} key={el.id} />)
      }
    </div>
    </>
  )
}

export default ListTasks