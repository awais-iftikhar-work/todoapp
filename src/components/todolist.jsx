import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const itemsList = [
    {
        id:1,
        status:'active',
        title:'Learn React'
    },
    {
        id:2,
        status:'not active',
        title:'Learn node'
    },
    {
        id:3,
        status:'active',
        title:'Learn express'
    }
]

export const TodoList = () => {

    return (
        <div>
            <Header/>
            <h2>Todo List</h2>
            {itemsList.map((res,ind)=>(
               <>
                <div>ID: {res.id}</div>
                <div>Title: <Link to={`/todo/${res.id}`}>{res.title}</Link></div>
                <div >Status: {res.status}</div>
               </>
            ))}
        </div>
    )
}