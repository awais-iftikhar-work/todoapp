import './App.css';
import { Item } from './components/Item';
import {  TodoList } from './components/todolist';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/todo',
    children: [
      {
        index: true,
        element: (
          <TodoList />
        ),
      },
    ],
  },
  {
    path: '/todo/:id',
    element: (
      <Item />
    ),
  }
]);

function App() {
  return (
      <RouterProvider  router={router}/>
  );
}


export default App;
