import {FC, memo} from 'react';
import TodoInfo from "../components/TodoHeader";
import {useTodoList} from "../hooks/useTodoList";
import AddTodoForm from "../components/AddTodo/AddTodoForm";
import TodoList from "../components/TodoList";


const TodoPage: FC = () => {
    const {
        todos, setTodos,
        refTitle, refChangedTitle, refChangedCompleted,
        filteredTodo,
        saveTodoChange,
        deleteTodo,
        addTodo, cancelAddTodo,
        showActiveHandler, showCompletedHandler, showAllHandler
    } = useTodoList();
    return (
        <section>
            <TodoInfo length={todos.length} showActiveHandler={showActiveHandler} showCompletedHandler={showCompletedHandler} showAllHandler={showAllHandler} />
            <AddTodoForm refTitle={refTitle} addTodo={addTodo} cancelAddTodo={cancelAddTodo} />
            <TodoList todos={todos} refChangedTitle={refChangedTitle} refChangedCompleted={refChangedCompleted} filteredTodo={filteredTodo} setTodos={setTodos} deleteTodo={deleteTodo} saveTodoChange={saveTodoChange} />
        </section>
    );
};

export default memo(TodoPage);