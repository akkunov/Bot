import './App.css'

import Items from './components/items'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignIn from "./components/auth-component/sign-in.jsx";
import SignUp from "./components/auth-component/sign-up.jsx";
import Admin from "./pages/Admin.jsx";


function App() {

    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Items/>
            },
            {
                path: 'admin/sign-in',
                element: <SignIn/>
            },
            {
                path: 'admin/sign-up',
                element: <SignUp/>
            },
            {
                path: '/admin',
                element: <Admin />,
            },

            {}
        ]
    )
    return <RouterProvider router={router}/>

}

export default App

