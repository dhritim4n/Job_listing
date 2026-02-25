
import { createBrowserRouter } from "react-router-dom";
import Home_pg from "../pages/Home_pg";
import Layout from "../components/layout/Layout";
import Jobs_listing_pg from "../pages/Jobs_listing_pg";

const routes = createBrowserRouter(
    [
        {
            path : "/",
            element : <Layout/>,
            children : [
                {
                    index : true,
                    element : <Home_pg/>
                },
                {
                    path : "jobs",
                    element : <Jobs_listing_pg/>

                }
            ]
        }
    ]
)

export {
    routes
};