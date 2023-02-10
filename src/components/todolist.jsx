import React,{useState} from 'react'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {v4 as uuidv4} from 'uuid'
import {AiFillDelete} from 'react-icons/ai'
import  {AiFillEdit} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Modal, ModalFooter,Row,Col,
  ModalHeader, ModalBody
} from "reactstrap"



export default function Todolist() {
    const [task,setTask]=useState('')
    const [open,setOpen]=useState(false)
    const [tasks,setTasks]=useState([])
    const [dataToEdit, setDataToEdit] = useState("");
    const [modal, setModal] = useState(false);
    
    const showModal = (t) =>{
      setModal(!modal);
      const editTodo = tasks.find((i) => i.id === t.id);
      console.log(editTodo)
      setDataToEdit(editTodo)
    }
    const showModal1 =()=>{setModal(!modal)}
     {/* handleclick to add task to the list */}
    const handleClick=()=>{
        if(task!==""){
        setOpen(true)
       setTasks([...tasks,{id:uuidv4(),data:task}])
        setTask("")
        }
    }
    const handleDelete =(task)=>{
        setTasks(tasks.filter((t)=> (t.id !== task.id) ))
    }
    {/* handleEdit function we use it when we click in edit button in the modal */}
    const handleEdit = (task,newValue) => {
      const editTodo = tasks.find((i) => i.id === task.id);
      console.log(editTodo)
      if(newValue != "" && editTodo.data != newValue){
             editTodo.data=newValue
              setTask("")
             setModal(!modal)
      }else if(newValue === "" || editTodo.data === newValue ){
                setTask("")
                setModal(!modal)
      }
    };
  
  
    
  return (
    <>
     {/* creation de modal */}
    <Modal isOpen={modal} 
                toggle={showModal1}
                modalTransition={{ timeout: 500}}>
                   <ModalBody>
                    <h1 className=' mb-6'>Edit Task</h1>
        <form>
          <Row>
            <Col lg={12}>
                  <div>
                    <input
                    type='text'
                    className='form-control mb-6'
                    defaultValue={dataToEdit.data}
                    onChange={(e)=>{setTask(e.target.value)}}
                     >
                    </input>
                    <Button onClick={()=>{handleEdit(dataToEdit,task)}}>edit</Button>
                  
                  </div>
            </Col>
           </Row>
           </form> 
                </ModalBody>
            </Modal>
            {/* creation de modal */}
    <div className='flex flex-col justify-center  items-center bg-white shadow-lg rounded-md w-3/4 mb-3'>

        <div className='flex justify-center items-center gap-3 lg:my-4 my-2 '>
           <HiOutlineClipboardList fontSize={26} className='text-gray-600 mt-3.5'/>  
            <h1 className='  lg:text-xl text-base font-bold text-gray-600 mt-4'>
                TODO List
            </h1>
        </div>
       <div className='flex flex-row justify-around items-center w-full p-2 gap-4  lg:my-4 my-2'>
           <input type="text" placeholder='Add New task...' value={task} className='rounded-md shadow-sm p-2 w-3/4 outline-none focus:outline-2 focus:outline-bgtrue bg-slate-100 border-2 border-slate-200' onChange={(e)=>{setTask(e.target.value)}}  autoFocus/>
           <button type='button' className='p-2 bg-bgtrue  w-1/4 rounded-md shadow-md  text-gray-700 text-lg' onClick={handleClick}>Add</button>
       </div>
       {open && tasks.map((t)=>(
         <div className='flex flex-row justify-between items-center w-full gap-4  my-2' key={t.id}>
            <input type="text" readOnly value={t.data} className='bg-slate-100  m-2 rounded-md shadow-sm p-2 w-3/4 outline-none focus:outline-2 focus:outline-bgtrue  border-2 border-slate-200'/>
            <div className=' flex justify-start items-start w-1/4 gap-2 ' >
            <button type='button' className='flex w-1/3 bg-bgtrue p-2  justify-center items-center rounded-md shadow-md ' onClick={()=>{handleDelete(t)}}><AiFillDelete className="text-gray-600 lg:text-xl text-base"/></button>
            <button type='button' className='flex w-1/3 bg-bgtrue p-2  justify-center items-center rounded-md shadow-md ' onClick={()=>{showModal(t)}}><AiFillEdit  className="text-gray-600"/></button>
            </div>
         </div> 
       ))
        
       }
    </div>
    </>
  )
}
