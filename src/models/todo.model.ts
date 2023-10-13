import React from "react";

export interface ITodo {
    id: string,
    title: string | undefined,
    completed: boolean,
}

export interface IMTitle {
    title: string,
}

export interface ITodoFilters {
    showAllHandler: () => void,
    showActiveHandler: () => void,
    showCompletedHandler: () => void,
}

export interface IAddTodo {
    title: string,
}

export interface IDeleteTodo {
    id: string | undefined,
}

export interface IChangeTodo {
    value: ITodo,
    refChangedTitle: React.RefObject<HTMLInputElement>,
    refChangedCompleted: React.RefObject<HTMLInputElement>,
    saveTodoChange: ({ id }: ISaveFunc) => void,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface IChangeTodoInputs {
    value: ITodo,
    refChangedTitle: React.RefObject<HTMLInputElement>,
    refChangedCompleted: React.RefObject<HTMLInputElement>,
}

export interface ISaveFunc {
    id: string,
}