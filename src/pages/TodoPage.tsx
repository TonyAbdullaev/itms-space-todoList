import React, {FC, useRef, useState} from 'react';
import {data} from "../constants";
import CTodo from "../components/CTodo";
import {Button, Checkbox, FormControlLabel, List, TextField} from "@mui/material";
import TodoInfo from "../components/TodoInfo";
import {ITodos} from "../models/todo.model";


const TodoPage: FC = () => {
    const [todos, setTodos] = useState(data);
    // const isCompleted = useRef(true);
    const isCompleted = true;
    const newTodoTitle = useRef('');


    const deleteTodo = (id: string) => setTodos(todos.filter(value => value.id !== id));

    const addNewTodoHandler = () => {

    }


    return (
        <section>
            <TodoInfo length={todos.length} todos={todos} setTodos={setTodos}  />
            <section style={{margin: "30px auto"}}>
                <h3>Add new</h3>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <TextField label="New todo"  size="small" variant="outlined" style={{minWidth: 600}} />
                        {/*<Checkbox checked={isCompleted} onChange={(e) => console.log("smthing")} />*/}
                    </div>
                    <div>
                        <Button onClick={addNewTodoHandler} size="small" variant="contained">Add</Button>
                        <Button onClick={addNewTodoHandler} size="small" variant="contained" style={{marginLeft: 5}}>Cancel</Button>
                    </div>
                </div>
            </section>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    todos.map((value: ITodos) =>
                        <CTodo
                            key={value.id}
                            todos={todos}
                            setTodos={setTodos}
                            value={value}
                            onDelete={deleteTodo}
                        />
                    )
                }
            </List>
        </section>
    );
};

export default TodoPage;