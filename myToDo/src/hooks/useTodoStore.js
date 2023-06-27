import { useDispatch, useSelector } from "react-redux"
import backendApi from "../api/backendApi";
import { addNewTodo, getTodos, setActiveTodo, updateTodos, cleanActiveTodo, deleteTodos } from "../store/todos/todoSlice"
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

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

    const startNewTodo = async (title, description) => {
        try {
            const { data } = await backendApi.post("/todos/", { title, description });
            dispatch(addNewTodo(data));
            dispatch(setActiveTodo(data.data));
            Toast.fire({
                icon: 'success',
                title: 'Tarea creada'
            })

        } catch (error) {
            console.log(error);
        }
    }
    const startCleanActive = () => {
        dispatch(cleanActiveTodo())
    }
    const startUpdateTodo = async (title, description, status, id) => {
        try {
            const { data } = await backendApi.put(`/todos/${id}`, { title, description, status });
            dispatch(updateTodos(data.data));
            Toast.fire({
                icon: 'success',
                title: 'Tarea actualizada'
            })

        } catch (error) {
            console.log(error);
        }
    }


    const startDeleteTodo = async (id) => {
        try {
            const { data } = await backendApi.delete(`/todos/${id}`)
            console.log(data);
            dispatch(deleteTodos());

            Toast.fire({
                icon: 'success',
                title: `${data.msg}`
            });

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
        startNewTodo,
        startUpdateTodo,
        startCleanActive,
        startDeleteTodo
    }
}