import React from 'react';
import {Button, Typography} from "@mui/material";
import {ITodos} from "../models/todo.model";
import {data} from "../constants";
import TodoFilters from "./TodoFilters";

interface ITodosInfo {
    length: number,
    todos: ITodos[],
    setTodos:  React.Dispatch<React.SetStateAction<ITodos[]>>
}
const TodoInfo = ({length, setTodos}: ITodosInfo) => {


    return (
        <div style={{padding: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1 style={{fontSize: '42px'}}>Total: {length}</h1>
            <TodoFilters setTodos={setTodos} />
        </div>
    );
};

export default TodoInfo;