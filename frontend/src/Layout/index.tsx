import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { PATHS } from "./PATH";

export default function Layout()
{
    const router = createBrowserRouter(PATHS);
    return <RouterProvider router={router} />;
}