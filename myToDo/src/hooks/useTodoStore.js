import { useDispatch, useSelector } from "react-redux"
import backendApi from "../api/backendApi";
import { addNewTodo, getTodos, setActiveTodo, updateTodos } from "../store/todos/todoSlice"

export const useTodoStore = () => {
    const dispatch = useDispatch();

    const { todos, isLoadingTodos } = useSelector(state => state.todo);


    const startLoadingTodos = async () => {
        try {
            const { data } = await backendApi.get("/todos/");
            dispatch(getTodos(data));
        } catch (error) {
            console.log(error);
        }

    }
    const startNewNote = async () => {
        try {

            const newTodo = {
                title: "prueba",
                description: "qwerty"
            }
            const { data } = await backendApi.post("/todos/", newTodo);
            console.log(data);

            dispatch(addNewTodo(newTodo));
            dispatch(setActiveTodo(newTodo))

        } catch (error) {
            console.log(error);
        }
    }

    const startUpdateTodo = async (todo, id) => {
        console.log(todo);
        console.log(id);
        try {
            const { data } = await backendApi.put(`/todos/${id}`, todo);
            console.log(data);
            dispatch(updateTodos(data.data));
        } catch (error) {
            console.log(error);
        }
    }



    return {
        //propiedades
        todos,
        isLoadingTodos,

        //metodos
        startLoadingTodos,
        startNewNote,
        startUpdateTodo
    }
}