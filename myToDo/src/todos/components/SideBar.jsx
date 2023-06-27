import React from 'react'
import { useEffect } from 'react'
import { useTodoStore } from '../../hooks/useTodoStore';
import { SideBarItem } from './SideBarItem';
import '../../styles.css'



export const SideBar = () => {
    const { todos, isLoadingTodos, startLoadingTodos } = useTodoStore();
    useEffect(() => {
        startLoadingTodos();
    }, [])
    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white sidebarSx">
            <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                <svg className="bi me-2" width="30" height="24"></svg>
                <span className="fs-5 fw-semibold">Tareas pendientes</span>
            </a>
            <div className="list-group list-group-flush border-bottom scroll-y">
                {
                    todos.map(note => (
                        <SideBarItem key={note.id} {...note} />
                    ))
                }
            </div>
        </div>
    )
}
