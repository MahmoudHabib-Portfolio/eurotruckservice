//Main Layout
import Root from "./Root";
import { Home, Notfount } from "../component";

// Lazy Load pages
export const PATHS = [
    {
        path: "/",
        element: (
                <Root />
        ),
        errorElement: <Notfount />,
        children: [
            {index: true, element: <Home />}
        ]
    }
];