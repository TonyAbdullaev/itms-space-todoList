import React, {FC, memo, useCallback} from 'react';
import {FormGroup} from "@mui/material";
import {IChangeTodo, ISaveFunc} from "../../models/todo.model";
import ChangeTodoController from "./ChangeTodoController";
import ChangeTodoInputs from "./ChangeTodoInputs";

const ChangeTodoForm: FC<IChangeTodo> = ({value, refChangedTitle, refChangedCompleted, saveTodoChange, setVisible}) => {


    const saveHandler = useCallback(({id}: ISaveFunc) => {
        saveTodoChange({id})
    }, [saveTodoChange])

    const closeHandler = useCallback(() => {
        setVisible(false)
    }, [setVisible])



    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <FormGroup style={{marginTop: "20px"}}>
                <ChangeTodoInputs value={value} refChangedTitle={refChangedTitle} refChangedCompleted={refChangedCompleted}  />
            </FormGroup>
            <ChangeTodoController value={value} saveHandler={saveHandler} closeHandler={closeHandler} />
        </div>
    );
};

export default memo(ChangeTodoForm);