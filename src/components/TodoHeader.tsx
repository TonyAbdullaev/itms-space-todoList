import React, {memo} from 'react';
import TodoFilters from "./TodoFilters";

interface ITodosInfo {
    length: number,
    showActiveHandler: () => void,
    showCompletedHandler: () => void,
    showAllHandler: () => void,
}

const TodoHeader = ({length, showCompletedHandler, showAllHandler, showActiveHandler}: ITodosInfo) => {
    return (
        <div style={{padding: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1 style={{fontSize: '42px'}}>Total: {length}</h1>
            <TodoFilters showActiveHandler={showActiveHandler} showCompletedHandler={showCompletedHandler} showAllHandler={showAllHandler} />
        </div>
    );
};

export default memo(TodoHeader);