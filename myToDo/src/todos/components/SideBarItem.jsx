import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActiveTodo } from '../../store/todos/todoSlice';

export const SideBarItem = ({ title, created, description, status, id }) => {

    const formatDate = (date) => {
        const newDate = new Date(date);
        const day = newDate.getDay();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        return `${(day <= 9 ? 0 : '')}${day}/${(month <= 9 ? 0 : '')}${month}/${year}`
    }

    const dispatch = useDispatch();

    const todoActive = () => {
        dispatch(setActiveTodo({ title, description, id, status }))
    }


    const newTitle = useMemo(() => {

        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title])

    return (

        <a className="list-group-item list-group-item-action py-3 lh-tight " aria-current="true" onClick={todoActive}>
            <div className="d-flex w-100 align-items-center justify-content-between">
                <strong className={`mb-1 ${status == 'Pending' ? '' : 'completed'}`}>{newTitle}</strong>
                <small>{formatDate(created)}</small>
            </div>
            <div className="col-10 mb-1 small">{description}</div>
        </a>
    )
}
