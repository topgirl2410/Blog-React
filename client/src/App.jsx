import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/write",
    element: <Write />
  },
  {
    path: "/single",
    element: <Single />
  }
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
