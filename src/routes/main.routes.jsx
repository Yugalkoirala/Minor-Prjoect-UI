import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import AddBook from "../pages/AddBookForm";
import Home from "../pages/Home";
import Book from "../pages/UserBook";
import BookDetail from "../pages/BookDetails";

export const mainRoutes = [
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: "home",
                element: <Home />,
            },
            {
                path:"books",
                element:<Book />,
            },
            {
                path:"about",
                element:<About />,
            },
            {
                path:"books/add",
                element:<AddBook />,
            },
            {
                path:"book/details/:bookId",
                element:<BookDetail />
            }
        ]
    },
];
