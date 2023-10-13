import React, {FC, memo, useCallback} from 'react';
import {STodo} from "../assets/styles/app.styles";
import {ITodo} from "../models/todo.model";
import TodoInfo from "./TodoInfo";
import TodoInfoController from "./TodoInfoController";

const MSTodo = memo(STodo);
interface ITodoFullInfo {
    value: ITodo,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    onDelete: (id: string) => void,
}

const TodoFullInfo: FC<ITodoFullInfo> = ({value, onDelete, setVisible}) => {

    const deleteHandler = useCallback(() => onDelete(value.id), [value, onDelete])

    return (
        <MSTodo>
            <TodoInfo value={value} />
            <TodoInfoController setVisible={setVisible} deleteHandler={deleteHandler} />
        </MSTodo>
    );
};

export default memo(TodoFullInfo);