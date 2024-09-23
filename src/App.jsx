import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Home from "./page/Home/Home";
import Counter from "./page/Counter/Counter";
import UserName from "./page/UserName/UserName";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/counter", element: <Counter /> },
      { path: "/user", element: <UserName /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
