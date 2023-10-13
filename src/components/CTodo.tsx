import React, {memo, useState} from 'react';
import {ISaveFunc, ITodo} from "../models/todo.model";
import {STodoLayout} from "../assets/styles/app.styles";
import ChangeTodoForm from "./ChangeTodo/ChangeTodoForm";
import TodoFullInfo from "./TodoFullInfo";

interface TodoProps {
    value: ITodo,
    todos: ITodo[],
    setTodos:  React.Dispatch<React.SetStateAction<ITodo[]>>,
    onDelete: (val: string) => void,
    saveTodoChange: ({ id }: ISaveFunc) => void,
    refChangedTitle: React.RefObject<HTMLInputElement>,
    refChangedCompleted: React.RefObject<HTMLInputElement>,
}

const CTodo = ({value, onDelete, saveTodoChange, refChangedTitle, refChangedCompleted}: TodoProps) => {
    const [isVisible, setVisible] = useState(false);

    return (
        <STodoLayout>
            <TodoFullInfo value={value} setVisible={setVisible} onDelete={onDelete} />
            {
                isVisible && <ChangeTodoForm value={value} refChangedTitle={refChangedTitle} refChangedCompleted={refChangedCompleted} saveTodoChange={saveTodoChange} setVisible={setVisible} />
            }
        </STodoLayout>
    );
};

export default memo(CTodo);