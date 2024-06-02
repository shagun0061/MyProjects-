import React from 'react';
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleSetTodo:(value:string)=>void
}
const InputFeild:React.FC<Props> = ({todo, setTodo,handleSetTodo}) => {
  return (
    <>
      <input type="text" onChange={(e)=>{setTodo(e.target.value)}} name='inputBox' value={todo} placeholder='Enter a Task' className='inputBox' />
      <button className='btn' onClick={()=>{handleSetTodo(todo)}}>ADD</button>
    </>
  )
}

export default InputFeild