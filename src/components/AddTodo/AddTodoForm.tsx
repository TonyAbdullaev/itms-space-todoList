import React, {FC} from 'react';
import {MTitleSmall} from "../UI/MTitle";
import AddTodoControllers from "./AddTodoControllers";
import {TextField} from "@mui/material";

interface IAddForm {
    refTitle: React.RefObject<HTMLInputElement>,
    addTodo: () => void,
    cancelAddTodo: () => void,
}

const AddTodoForm: FC<IAddForm> = ({refTitle, addTodo, cancelAddTodo}) => {
    return (
        <div>
            <MTitleSmall title="Add new todo" />
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <TextField
                    label="New todo"
                    inputRef={refTitle}
                    size="small"
                    variant="outlined"
                    style={{width: '100%'}}
                />
                <AddTodoControllers addTodo={addTodo} cancelAddTodo={cancelAddTodo} />
            </div>
            <br/>
        </div>
    );
};

export default AddTodoForm;