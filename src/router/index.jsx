import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Message } from "../pages/Message";
import { FavoriteList } from "../pages/FavoriteList";

import { MyFavorite } from "../pages/MyFavorite";
import { Customize } from "../pages/Customize";
import { NotFound } from "../pages/NotFound";
import { LayoutPublic } from "../layout/LayoutPublic";
import { ListHouse } from "../pages/ListHouse";
import { HouseList } from "../pages/HouseList";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Dashboard/>,
                
            },
            {
                path:'/favoriteList',
                element: <FavoriteList/>,
                
            },
            {
                path:'/message',
                element: <Message/>,
                
            },
            {
                path:'/listHouse',
                element: <ListHouse/>,
                
            },
            {
                path:'/houseList',
                element: <HouseList/>,
                
            },
            {
                path:'/myFavorite',
                element: <MyFavorite/>,
                
            },
            {
                path:'/customize',
                element: <Customize/>,
                
            },
        ]
    }
])