import React,{useState} from 'react'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {AiFillDelete} from  'react-icons/ai'
const Todolist = () => {
    const [open, setOpen] = useState(false);
    const [task,setTask]=useState('')
    console.log(task)
    const handleClick = ()=>{
     setOpen(true)
    }
  return (
    <div className='flex flex-col justify-around items-center bg-white mt-40 w-3/4 rounded-md shadow-md p-2'>
        <div className='flex flex-row gap-3 p-2'>
            <HiOutlineClipboardList fontSize={24} className=" text-slate-700"/>
            <h1 className='text-slate-700 font-bold'>TODO List</h1>
        </div>
        <div className='flex flex-row gap-3 p-2 w-full'>
            <input type="text" placeholder='Add New task...' className='w-3/4 bg-slate-100 focus:outline-bgtrue p-3 rounded-md border-slate-300 border-2' onChange={(e)=>{setTask(e.target.value)}}/>
            <button className='bg-bgtrue p-3 rounded-md w-1/4 shadow-md  ' onClick={handleClick}> Add</button>
        </div>
        {open &&(
            <div className='flex flex-row gap-3 p-2 w-full'>
            <input type="text" readOnly  value={task} className='w-3/4 bg-slate-100 focus:outline-bgtrue p-3 rounded-md border-slate-300 border-2'/>
            <button className='bg-bgtrue p-3 rounded-md w-1/4 shadow-md  ' onClick={handleClick}><AiFillDelete  fontSize={24} className=" text-slate-700"/></button>
        </div>
        )}
    </div>
  )
}

export default Todolist
