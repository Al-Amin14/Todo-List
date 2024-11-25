import { useState , useEffect} from 'react'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos,setTodos]= useState([])

  const handleEdit=()=>{
    
  }

  const handleDelete=()=>{

  }

  const handleAdd = ()=>{
    setTodos([...todos,{todo,isComplete:false,}])
    console.log(todos)
    setTodo("")
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  // useEffect(() => {
  //   console.log(todos)
  // });

  return (
    <>
    <Navbar/>
    <div className="card m-10">
      <div className="rounded-3xl p-10 container h-80 bg-violet-300">
        <p className='font-bold'>Add a Todo</p>
        <input type="text" onChange={handleChange} value={todo}  className='w-5/12 rounded my-2 p-3 font-semibold'/>
        <button onClick={handleAdd} className='mx-7 px-4 border border-2 rounded-xl p-1 font-bold bg-violet-500'>Add</button>
        <div className="todo-list">
          <p className='font-bold'>Your Todos</p>

          {todos.map((items)=>{
            return (<div key={items.todo} className={items.isComplete?"line-through":""}>
            <div className='todolistshow flex border border-2 rounded-xl justify-evenly items-center font-semibold text-lg'>
              <p>{items.todo}</p>
              <div className="diver h-10 border-x mx-4 border"></div>
              <div className="btn p-2">

              <button onClick={handleEdit} className='mx-2 px-4 border border-2 rounded-xl p-1 font-bold bg-violet-500'>Edit</button>
              <button onClick={handleDelete} className='mx-2 px-4 border border-2 rounded-xl p-1 font-bold bg-violet-500'>Delete</button>
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
