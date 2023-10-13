import {FC, memo} from 'react';
import {Button} from "@mui/material";

interface Interface {
    addTodo: () => void,
    cancelAddTodo: () => void,
}

const AddTodoControllers: FC<Interface> = ({addTodo, cancelAddTodo}) => {
    return (
        <div  style={{display: "flex", justifyContent: "space-between"}}>
            <Button onClick={addTodo} variant="contained" color="success" style={{margin: "0 5px"}}>ADD</Button>
            <Button onClick={cancelAddTodo} variant="contained" color="error">Cancel</Button>
        </div>
    );
};

export default memo(AddTodoControllers);