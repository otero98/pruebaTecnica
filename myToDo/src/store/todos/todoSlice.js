import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({

    name: "todo",
    initialState: {
        isLoadingTodos: true,
        todos: [],
        active: {
            title: '',
            description: '',
            status: '',
            id: ''
        },
    },
    reducers: {
        addNewTodo: (state, { payload }) => {
            state.todos.push(payload.data);
        },
        cleanActiveTodo: (state) => {
            state.active = {
                title: '',
                description: '',
                status: ''
            };
        },
        setActiveTodo: (state, { payload }) => {
            state.active = payload;
        },
        getTodos: (state, { payload = [] }) => {
            state.isLoadingTodos = false;
            state.todos = payload.data;
        },
        updateTodos: (state, { payload }) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return payload;
                }
                return todo;
            })
        },
        deleteTodos: (state) => {
            state.todos = state.todos.filter(todos => todos.id !== state.active.id)

        }

    }
})
export const { addNewTodo, getTodos, updateTodos, setActiveTodo, cleanActiveTodo, deleteTodos } = todoSlice.actions;