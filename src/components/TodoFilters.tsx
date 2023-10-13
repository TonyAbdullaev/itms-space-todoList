import React, {FC, memo} from 'react';
import {Button} from "@mui/material";

interface ITodoFilters {
    showAllHandler: () => void,
    showActiveHandler: () => void,
    showCompletedHandler: () => void,
}

const TodoFilters: FC<ITodoFilters> = ({showAllHandler, showActiveHandler, showCompletedHandler}) => {
    return (
        <div>
            <Button variant="contained" onClick={showAllHandler}>Show all Tasks</Button>
            <Button variant="contained" onClick={showActiveHandler} style={{marginLeft: "5px"}}>Show Active Tasks</Button>
            <Button variant="contained" onClick={showCompletedHandler} style={{marginLeft: "5px"}}>Show Completed Tasks</Button>
        </div>
    );
};

export default memo(TodoFilters);