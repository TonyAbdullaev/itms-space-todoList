import React, {FC, memo} from 'react';
import {Button} from "@mui/material";
import {ISaveFunc, ITodo} from "../../models/todo.model";

interface IChangeTodoController {
    saveHandler: ({id}: ISaveFunc) => void,
    closeHandler: () => void,
    value: ITodo,
}

const ChangeTodoController: FC<IChangeTodoController> = ({saveHandler, value, closeHandler}) => {
    return (
        <div>
            <Button style={{margin: '10px 2px'}} variant="contained" onClick={closeHandler}>Back</Button>
            <Button style={{margin: '10px 2px'}} variant="contained" color="success" onClick={() => {
                saveHandler({id: value.id})
                closeHandler()
            }}>Save</Button>
        </div>
    );
};

export default memo(ChangeTodoController);