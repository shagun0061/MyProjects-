import React from 'react'
interface Props{
    todo:string;
    setTodo:(value:string
    )=>void
}
const InputFeild:React.FC<Props> = ({todo, setTodo}) => {
  return (
    <>
      <input type="text" onChange={(e)=>{setTodo(e.target.value)}} name='inputBox' value={todo} placeholder='Enter a Task' className='inputBox' />
      <button className='btn'>ADD</button>
    </>
  )
}

export default InputFeild