import React, { useState } from 'react'
import './App.css'
import InputFeild from './components/InputFeild';

import { AllTodos } from './helper'
import SingleTodo from './components/SingleTodo';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [allTodoList, setAllTodoList] = useState<AllTodos[]>([]);


  function handleSetTodo(value: string) {
    const newTodo = {
      todo: value,
      isCompleted: false,
      id: Date.now(),
    }
    setAllTodoList([...allTodoList, newTodo]);
    setTodo('')
  }

  function hadleDelTodo(id: number) {
    setAllTodoList(allTodoList.filter((ele) => ele.id !== id));
  }

  function hadleComlTodo(id: number) {
    const data = allTodoList.map((ele) => {
      if (ele.id === id) {
        return {...ele, isCompleted:!ele.isCompleted}
      } else {
        return ele;
      }
    })
    setAllTodoList(data);
  }


  return (
    <div className="mainBox">
      <h1>Tasker</h1>
      <InputFeild todo={todo} setTodo={setTodo} handleSetTodo={handleSetTodo} />
      <section className='main_section'>
        <section className='active_task_section'>
          <h3>Active Task</h3>
          {allTodoList?.map((ele) => {
            if (ele.isCompleted !== true) {
              return <div>
                <SingleTodo ele={ele} hadleDelTodo={hadleDelTodo} hadleComlTodo={hadleComlTodo} allTodoList={allTodoList} setAllTodoList={setAllTodoList}/>
              </div>
            }
          })}
        </section>
        <section className='completed_task_section'>
          <h3>Completed Task</h3>
          {allTodoList?.map((ele) => {
            if (ele.isCompleted == true) {
              return <div>
                <SingleTodo ele={ele} hadleDelTodo={hadleDelTodo} hadleComlTodo={hadleComlTodo} allTodoList={allTodoList} setAllTodoList={setAllTodoList} />
              </div>
            }
          })}

        </section>
      </section>
    </div>
  )
}

export default App
