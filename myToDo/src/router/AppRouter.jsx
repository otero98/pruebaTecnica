import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'


import { TodoRoutes } from '../todos/routes/TodoRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'


export const AppRouter = () => {
    const status = 'authenticated';
    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path='/*' element={<TodoRoutes />} />
                    : <Route path='/auth/*' element={<AuthRoutes />} />
            }


            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}
