import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'

import { useTodoStore } from '../../hooks/useTodoStore';

export const Navbar = () => {
    const onLogout = () => {
        console.log('logout');
    }
    const dispatch = useDispatch();

    const { todos, isLoadingTodos, startNewNote } = useTodoStore();

    const onClickNewNote = () => {
        dispatch(startNewNote())
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Tareas
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        onClick={onClickNewNote}
                    >Nueva</button>


                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* <NavLink
                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/login"
                >
                    Logout
                </NavLink> */}
                    <span className='nav-item nav-link text-primary'>
                        gio
                    </span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >Logout</button>

                </ul>
            </div>
        </nav>
    )
}
