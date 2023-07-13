import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";
import Users from "./pages/Users";
import Sales from "./pages/Sales";
import Home from "./Components/Home";
import Estadisticas from './pages/Estadisticas'
import Shopping from "./pages/Shopping";
import Production from "./pages/Production";

function App() {

  const router = createBrowserRouter([

    {
    path: "/bardePedro/",
 
      element: <Dashboard />,
      children: [
        {
          path: "home/",
          element: <Home />,
        },
        /* {
          path: "usuarios/",
          element: <Users />,
        } */,
        {
          path: "ventas/",
          element: <Sales />,
        },
        {
          path: "compras/",
          element: <Shopping />,
        },
        {
          path: "productos/",
          element: <Production />,
        },
        {
          path: "estadisticas/",
          element: <Estadisticas />,
        },
      ],
    },
/*     {
      path: "home/usuarios",
      element: <Users />,
    }, */

  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
