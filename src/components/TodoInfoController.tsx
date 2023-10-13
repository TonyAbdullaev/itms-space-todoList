import React, {FC, memo} from 'react';
import {Button} from "@mui/material";

interface ITodoInfoController {
    // cancelAndAddHandler: () => void,
    // onDelete: (id: string) => void,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    deleteHandler: () => void,
}

const TodoInfoController: FC<ITodoInfoController> = ({setVisible, deleteHandler}) => {
    return (
        <div>
            <Button onClick={() => setVisible(prevState => !prevState)} variant="contained" color="success" style={{margin: "0 5px"}}>Edit</Button>
            <Button onClick={deleteHandler} variant="outlined" color="error" style={{margin: "0 5px"}}>Delete</Button>
        </div>
    );
};


export default memo(TodoInfoController);