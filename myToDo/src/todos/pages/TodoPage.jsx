import React from 'react'
import { TodoView } from '../views'
import { Navbar } from '../components/Navbar'
import { SideBar } from '../components/SideBar'




export const TodoPage = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <SideBar />
                    </div>
                    <div className="col-lg-8">
                        <TodoView />
                    </div>
                </div>
            </div>

        </>
    )
}
