import React, {FC, memo} from 'react';
import {TextField} from "@mui/material";

interface IMTextField {
    text: string,
    onTitleChange: (e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

const MTextField: FC<IMTextField> = ({text, onTitleChange}) => {
    return (
        <TextField label="New todo" value={text} onChange={(event) => onTitleChange(event)} size="small" variant="outlined" style={{width: '100%'}} />
    );
};

export default memo(MTextField);