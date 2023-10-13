import React, {FC, memo} from 'react';
import {ITodo} from "../models/todo.model";

interface ITodoInfo {
    value: ITodo,
}

const TodoInfo: FC<ITodoInfo> = ({value}) => {
    return (
        <div>
            <h2>{value.title}</h2>
        </div>
    );
};

export default memo(TodoInfo);