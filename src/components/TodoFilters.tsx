import React from 'react';
import {Button} from "@mui/material";
import {data} from "../constants";
import {ITodos} from "../models/todo.model";

interface FilterParams {
    setTodos:  React.Dispatch<React.SetStateAction<ITodos[]>>
}

const TodoFilters = ({setTodos}: FilterParams) => {
    const showAllHandler = () => setTodos(data);
    const showActiveHandler = () => {
        const activeTodos = data.filter(value => !value.completed)
        setTodos(activeTodos)
    };
    const showCompletedHandler = () => {
        const completedTodos = data.filter(value => value.completed)
        setTodos(completedTodos)
    };
    return (
        <div>
            <Button variant="contained" onClick={showAllHandler}>Show all Tasks</Button>
            <Button variant="contained" onClick={showActiveHandler} style={{marginLeft: "5px"}}>Show Active Tasks</Button>
            <Button variant="contained" onClick={showCompletedHandler} style={{marginLeft: "5px"}}>Show Completed Tasks</Button>
        </div>
    );
};

export default TodoFilters;