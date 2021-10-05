import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodosHeading from "../../components/TodosHeading";
import {addTodo, deleteTodo} from "../../redux/actions";

const Todos = () => {
    const [input, setInput] = useState("")
    const todos = useSelector(s => s.todos)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(addTodo(todos, input))
        setInput("")
    }
    const handleDelete = (id) =>{
        dispatch(deleteTodo(id))
    }
    const handleChange = (e) => setInput(e.target.value);

    return (
        <div className="col-md-6 offset-md-3 my-5">
            <TodosHeading/>
            <div className="row mb-4">
                <div className="col-8">
                    <input
                        type="text"
                        className="form-control"
                        value={input}
                        onChange={handleChange}/>
                </div>
                <div className="col-4">
                    <button
                        className="btn  btn-primary w-100"
                        onClick={handleSubmit}
                    >
                        add
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {
                    todos.map((el, idx) =>
                        <li key={el.id} className="list-group-item d-flex justify-content-between ">
                            <span>{el.title}</span>
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(el.id)}
                            >
                                del
                            </button>
                        </li>

                    )
                }
            </ul>
        </div>
    );
};

export default Todos;