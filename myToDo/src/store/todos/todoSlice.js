import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({

    name: "todo",
    initialState: {
        isLoadingTodos: true,
        todos: [],
        active: null,
    },
    reducers: {
        addNewTodo: (state, { payload }) => {
            state.todos.push(payload);
        },
        setActiveTodo: (state, {payload}) => {
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

    }
})
export const { addNewTodo, getTodos, updateTodos, setActiveTodo } = todoSlice.actions;