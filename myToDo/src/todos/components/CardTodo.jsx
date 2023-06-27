import React from 'react'

export const CardTodo = ({ icon, color, title }) => {
    return (
        <div className="col-lg-4">
            <div className="card-todo">
                <span className={`card-todo-icon ${color}`}>
                    {icon}
                </span>
                <p>{title}</p>
            </div>
        </div>

    )
}
