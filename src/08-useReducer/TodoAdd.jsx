import { useForm } from "../hooks/useForm"

export const TodoAdd = ({handleNewTodo}) => {

    const {description, onInputChange, onResetForm } = useForm({ description: ''});

    const onNewTodo = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;
        handleNewTodo({
            id: new Date().getTime(),
            description,
            done: false
        });
        onResetForm();
    }

    return (
        <form onSubmit={onNewTodo}>
            <input name="description" onChange={onInputChange} value={description} type="text" placeholder="¿Que hay que hacer?" className="form-control" />
            <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
        </form>
    )
}
