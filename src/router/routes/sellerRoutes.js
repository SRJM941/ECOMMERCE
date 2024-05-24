
import { lazy } from "react";
//import Home from "../../views/Home";
const Home = lazy(()=>import('../../views/Home'));
export const sellerRoutes = [
    {
        path: '/',
        element : <Home/>,
        ability : ['admin','seller']
    }
]