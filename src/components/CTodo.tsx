import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {ITodos} from "../models/todo.model";
import {STodoLayout, STodo} from "../assets/styles/app.styles";

interface TodoProps {
    value: ITodos,
    todos: ITodos[],
    setTodos:  React.Dispatch<React.SetStateAction<ITodos[]>>,
    onDelete: (val: string) => void
}

const CTodo = ({value, todos, setTodos, onDelete}: TodoProps) => {
    const [isVisible, setVisible] = useState(false);
    const [title, setTitle] = useState(value.title)
    const [isCompleted, setCompleted] = useState(value.completed)


    const onSubmit = () => {
        const changedTodo: ITodos = {id: value.id, title, completed: isCompleted};
        const newTodoArr = todos.map((val) => {
            if (val.id === value.id) {
                return changedTodo;
            }
            return val
        })
        setTodos(newTodoArr)
        setVisible(false)
    }

    return (
        <STodoLayout>
            <STodo>
                <div>
                    <span>{value.id}</span>
                    <h2>{value.title}</h2>
                </div>
                <div>
                    <Button onClick={() => setVisible(prevState => !prevState)} variant="contained" color="success" style={{margin: "0 5px"}}>{isVisible ? "Cancel" : "Edit"}</Button>
                    <Button onClick={() => onDelete(value.id)} variant="outlined" color="error" style={{margin: "0 5px"}}>Delete</Button>
                </div>
            </STodo>
        {
            isVisible &&
            <FormGroup style={{marginTop: "20px"}}>
                <div style={{display: "flex"}}>
                    <TextField label="Id" value={value.id} disabled variant="outlined" style={{minWidth: "350px"}} />
                    <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined" style={{minWidth: "300px", marginLeft: "20px"}} />
                    <FormControlLabel control={<Checkbox checked={isCompleted} onChange={(e) => setCompleted(e.target.checked)} />} style={{marginLeft: "20px"}} label="Completed" />
                </div>
                <br/>
                <Button onClick={onSubmit} variant="contained">Submit</Button>
            </FormGroup>
        }
        </STodoLayout>
    );
};

export default CTodo;