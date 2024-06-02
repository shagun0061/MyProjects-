import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import { AllTodos } from "../helper";
import { useState } from "react";

interface Props {
    ele: AllTodos;
    hadleDelTodo: (id: number) => void;
    hadleComlTodo: (id: number) => void;
    setAllTodoList: React.Dispatch<React.SetStateAction<AllTodos[]>>;
    allTodoList: AllTodos[];
}
const SingleTodo = ({ ele, hadleDelTodo, hadleComlTodo, setAllTodoList, allTodoList }: Props) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState(ele.todo);

    function editTodo(e: React.FormEvent<HTMLFormElement>, id: number) {
        
        e.preventDefault();
        const data = allTodoList.map((ele) => {
            if (ele.id == id) {
                return { ...ele, todo: editValue }
            } else {
                return ele;
            }
        })
        setAllTodoList(data);
        setIsEdit(false)

    }
    return (
        <form onSubmit={(e) => { editTodo(e, ele.id) }}>
            <div className="sigle_todo">
                <div className="sigle_todo_text">
                    {
                        isEdit && !ele.isCompleted? <input value={editValue} onChange={(e) => setEditValue(e.target.value)} /> :  ele.todo
                    }
                    {
                        ele.isCompleted == true ? <s>{ele.todo}</s> : ""
                    }
                </div>
                <div className="sigle_todo_btns">
                    <AiFillEdit onClick={() => { setIsEdit(!isEdit) }} />
                    <TiTick onClick={() => { hadleComlTodo(ele.id) }} />
                    <MdDeleteForever onClick={() => { hadleDelTodo(ele.id) }} />
                </div>
            </div>
          </form>
    )
}

export default SingleTodo