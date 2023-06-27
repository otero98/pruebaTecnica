import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes>
            <Route path='login' element={<LoginPage />}></Route>

            <Route path='/*' element={<Navigate to="/auth/login" />}></Route>
        </Routes>
  )
}
