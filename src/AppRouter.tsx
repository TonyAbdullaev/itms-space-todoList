import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import {
    LAYOUT_PAGE,
    TODO_PATH,
    TODO_EDIT_PATH,
    ERROR_PAGE,
} from "./constants";
import CLayout from "./components/CLayout";
import TodoPage from "./pages/TodoPage";
import TodosPage from "./pages/TodosPage";
import TodoEditPage from "./pages/TodoEditPage";
import ErrorPage from "./pages/ErrorPage";

const AppRouter = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path={LAYOUT_PAGE} element={<CLayout />}>
            <Route index element={<TodoPage />}/>
            <Route path={TODO_PATH} element={<TodosPage />} />
            <Route path={TODO_EDIT_PATH} element={<TodoEditPage />} />
            <Route path={ERROR_PAGE} element={<ErrorPage />} />
        </Route>
    ));

    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;