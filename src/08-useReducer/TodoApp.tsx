import { useTodos } from "../hooks";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {

    const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount} = useTodos();

    return (
        <>
            <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>
            </div>
        
        </>
    )
}
