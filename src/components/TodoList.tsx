import React, {FC, memo} from 'react';
import {IDeleteTodo, ISaveFunc, ITodo} from "../models/todo.model";
import CTodo from "./CTodo";
import {List} from "@mui/material";

interface ITodoList {
    todos: ITodo[],
    refChangedTitle: React.RefObject<HTMLInputElement>,
    refChangedCompleted: React.RefObject<HTMLInputElement>,
    filteredTodo: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    deleteTodo: ({id}: IDeleteTodo) => void,
    saveTodoChange: ({ id }: ISaveFunc) => void,
}

const TodoList: FC<ITodoList> = ({todos, refChangedTitle, refChangedCompleted, filteredTodo, setTodos, saveTodoChange, deleteTodo}) => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                filteredTodo.map((value: ITodo) =>
                    <CTodo
                        refChangedTitle={refChangedTitle}
                        refChangedCompleted={refChangedCompleted}
                        key={value.id}
                        todos={todos}
                        setTodos={setTodos}
                        value={value}
                        saveTodoChange={saveTodoChange}
                        onDelete={() => deleteTodo({id: value.id})}
                    />
                )
            }
        </List>
    );
};

export default memo(TodoList);