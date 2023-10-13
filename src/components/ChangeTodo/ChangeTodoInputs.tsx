import React, {FC, memo} from 'react';
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import {IChangeTodoInputs} from "../../models/todo.model";

const MFormLabel = memo(FormControlLabel)

const ChangeTodoInputs: FC<IChangeTodoInputs> = ({value, refChangedTitle, refChangedCompleted}) => {
    return (
        <div style={{display: "flex"}}>
            <TextField label="Id" value={value.id} disabled variant="outlined" style={{minWidth: "350px"}} />
            <TextField label="Title" inputRef={refChangedTitle} defaultValue={value.title} variant="outlined" style={{minWidth: "300px", marginLeft: "20px"}} />
            <MFormLabel control={<Checkbox inputRef={refChangedCompleted} defaultChecked={value.completed} />} style={{marginLeft: "20px"}} label="Completed" />
        </div>
    );
};

export default memo(ChangeTodoInputs);