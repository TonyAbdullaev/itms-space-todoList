import {useCallback, useEffect, useRef, useState} from "react";
import {initialTodoData} from "../data/InitialTodoData";
import {IDeleteTodo, ISaveFunc, ITodo} from "../models/todo.model";
import {v4} from "uuid";

export const useTodoList = () => {
    const [todos, setTodos] = useState<ITodo[]>(initialTodoData);
    const [todoFilter, setTodoFilter] = useState<string>('all');
    const [filteredTodo, setFilteredTodo] = useState(todos)

    const refTitle = useRef<HTMLInputElement>(null);
    const [isAdd, setAdd] = useState(false);

    const refChangedTitle = useRef<HTMLInputElement>(null);
    const refChangedCompleted = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isAdd) {
            const newTodo = {id: v4(), title: refTitle.current?.value, completed: false};
            setTodos((prevState) => [...prevState, newTodo]);
            setAdd(false);
            if (refTitle.current?.value) {
                refTitle.current.value = "";
            }
        }
    }, [todos, isAdd, setTodos]);

    useEffect(() => {
        if (todoFilter === 'all') {
            return setFilteredTodo(todos)
        }
        if (todoFilter === 'active') {
            return setFilteredTodo(todos.filter((value) => !value.completed))
        }
        if (todoFilter === 'completed') {
            return setFilteredTodo(todos.filter((value) => value.completed))
        }
    }, [todoFilter, todos])


    const saveTodoChange = useCallback(({id}: ISaveFunc) => {

        if (!refChangedTitle.current && !refChangedCompleted.current) {
            return;
        }

        const changedTodos = todos.map((value) => {
            if (value.id === id && refChangedTitle.current && refChangedCompleted.current) {
                return {...value, title: refChangedTitle.current.value, completed: refChangedCompleted.current.checked}
            }
            return value;
        })
        setTodos(changedTodos);
        setFilteredTodo(changedTodos);
    }, [todos])



    const addTodo = useCallback(() => {
        setAdd(true);
    }, [])

    const cancelAddTodo = useCallback(() => {
        if (refTitle.current?.value) {
            return refTitle.current.value = ""
        }
    }, [])

    const deleteTodo = useCallback(({id}: IDeleteTodo) =>
        setTodos(todos.filter(value => value.id !== id)),
        [todos]);

    const showAllHandler = useCallback(() => {
        setTodoFilter('all');
    }, [])

    const showActiveHandler = useCallback(() => {
        setTodoFilter('active');
    }, []);

    const showCompletedHandler = useCallback(() => {
        setTodoFilter('completed')
    }, []);

    return {
        refTitle, refChangedTitle, refChangedCompleted,
        addTodo, cancelAddTodo,
        filteredTodo, saveTodoChange,
        todos, setTodos, deleteTodo,
        todoFilter, setTodoFilter,
        showAllHandler, showActiveHandler, showCompletedHandler,
    }
}