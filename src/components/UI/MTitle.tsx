import React, {FC, memo} from 'react';
import {IMTitle} from "../../models/todo.model";
import {STitle, STitleSmall} from "../../assets/styles/app.styles";

const Title: FC<IMTitle> = ({title}) => {
    return (
        <STitle>
            {title}
        </STitle>
    );
};

const TitleSmall: FC<IMTitle> = ({title}) => {
    return (
        <STitleSmall>
            {title}
        </STitleSmall>
    );
};

const MTitle = memo(Title);
const MTitleSmall = memo(TitleSmall);

export {MTitle, MTitleSmall};