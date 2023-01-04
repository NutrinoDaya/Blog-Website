import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import Write from './pages/Write.tsx'
import Single from './pages/Single.tsx'
import Home from './pages/Home.tsx'
import NavBar from "./Component/NavBar.tsx";
import Footer from "./Component/Footer.tsx";
import About from "./pages/About.tsx"
import Contact from "./pages/Contact.tsx";
import Papers from "./pages/Papers.tsx"
import Search from "./pages/Search.tsx"

import './Style/Style.scss'

function layOut() {
    return ( <
        >
        <
        NavBar / >

        <
        Outlet / >
        <
        Footer / >
        <
        />
    );
}
const router = createBrowserRouter([{
        path: "/",
        element: layOut(),
        children: [{
                path: "/",
                element: < Home / >
            },
            {
                path: "/Write",
                element: < Write / >
            },
            {
                path: "/post/:id",
                element: < Single / >
            },
            {
                path: "/About",
                element: < About / >
            },
            {
                path: "/Contact",
                element: < Contact / >
            },
            {
                path: "/Papers",
                element: < Papers / >
            },
            {
                path : "/Search",
                element : <Search/>
            }
        ]
    },
    {
        path: "/Register",
        element: < Register / > ,
    },
    {
        path: "/Login",
        element: < Login / > ,
    },

    {
        path: "/Home",
        element: < Home / > ,
    },

]);

function App() {
    return ( <
        div className = "app" >
        <
        div className = "Container" >
        <
        RouterProvider router = { router }
        /> < /
        div > <
        /div>
    );
}

export default App;