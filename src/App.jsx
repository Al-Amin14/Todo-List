import { useState , useEffect } from 'react'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos,setTodos]= useState([])
  const [showfinish, setShowfinish] = useState(true);
  
  useEffect(() => {
    let _todos_=localStorage.getItem("todos")
    if(_todos_){
      let values=JSON.parse(localStorage.getItem("todos"))
      setTodos(values)
    }
  },[]);



 
  const saveTOLIST=()=>{
      
      console.log("Printing")
      localStorage.setItem("todos",JSON.stringify(todos))

  }

  const handleEdit= (id)=>{
    let index=todos.findIndex((items)=>{return items.uid==id})
    setTodo(todos[index].todo)
    let new_todos=todos.filter((items)=>items.uid!=id)
    setTodos(new_todos)
  }

  const handleDelete=(e)=>{
    console.log(e)
    let id=e;
    let newTodos=todos.filter((items)=>items.uid!=e)
    setTodos(newTodos)
  }

  const handleShow_data=(e)=>{
    setShowfinish(!showfinish)
  }


  const handleAdd =()=>{
    console.log("++++++++")
    setTodos([...todos,{uid:uuidv4(),todo,isComplete:false,}])
    setTodo("")
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleSelectedChange = (e)=>{
    console.log(e.target.name)
    let id=e.target.name
    let val=todos.findIndex((items)=>{
      return items.uid==id
    })
    let newTodos=[...todos]
    newTodos[val].isComplete=!newTodos[val].isComplete
    setTodos(newTodos)
    console.log(todos)
  }
  // useEffect(() => {
  //   console.log(todos)
  // });

  return (
    <>
    <Navbar/>
    <div className="max-[720px]:m-2 card m-10">
      <div className="max-[720px]:p-3 rounded-3xl p-10 container h-auto bg-violet-300">
        <p className='text-center font-bold text-2xl mb-5 pb-8 mt-0'>iTask - Manage your todos at one place</p>
          <div className='flex flex-col'>
            <p className='font-bold text-xl'>Add a Todo</p>
            <input type="text" onChange={handleChange} value={todo}  className='w-full rounded rounded-3xl my-2 p-3 font-semibold'/>
            <button onClick={handleAdd} disabled={todo.length<3} className='text-xl h-12 border border-2 rounded-xl p-1 font-bold bg-violet-500'>Add</button>
          </div> 

        <div className="todo-list">
          <div className="show_done_check flex flex-col gap-3 font-bold text-xl">
            <div className='flex my-2 gap-2 '>

            <input onChange={handleShow_data} type="checkbox" checked={showfinish}/>
            <p>Show finished</p>
            </div>
            <div className="hrshow h-2 rounded-full my-3  w-11/12 mx-auto bg-[#222222] opacity-40"></div>
          </div>
          {todos.length==0 && <div className='font-bold text-center m-10 text-2xl'>No todos to display</div> }
          {todos.map((items)=>{
            if(todos.length>0)
                saveTOLIST()
            return ((showfinish || !items.isComplete) && <div key={items.uid} className={items.isComplete?"line-through":""} >
            <div className='m-2 todolistshow flex border border-2 rounded-xl justify-start items-center font-semibold text-lg'>
              <div className="max-[720px]:gap-2 pl-1 todolist_first_part gap-3 flex justify-start items-center w-7/12">
                <input name={items.uid} onChange={handleSelectedChange}  type="checkbox" className='max-[720px]:w-auto w-10 h-5'/>
                <p className='w-auto overflow-scroll no-scrollbar'>{items.todo}</p>
              </div>
              <div className="diver h-10 border-x mx-4 border"></div>
              <div className="btn p-2 flex items-center justify-center max-[720px]:table-fixed max-[720px]:text-sm w-3/12 text-xl">
                <button onClick={()=>handleEdit(items.uid)} className='max-[720px]:px-2 mx-1 mx-2 px-4 border border-2 rounded-xl p-1 font-bold bg-violet-500'><FaEdit /> </button>
                <button onClick={()=>handleDelete(items.uid)} className='max-[720px]:px-2 mx-1 mx-2 px-4 border border-2 rounded-xl p-1 font-bold bg-violet-500'><RiDeleteBin7Fill /></button>
              </div>
              </div>
            </div>
            )

          })}


        </div>
      </div>
    </div>
    </>
  )
}

export default App
