import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

let router = createBrowserRouter([
  {
    Component: AppLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/menu",
        Component: Menu,
        loader: menuLoader
      },
      {
        path: "/cart",
        Component: Cart
      },
      {
        path: "/order/new",
        Component: CreateOrder
      },
      {
        path: "/order/:orderId",
        Component: Order,
        loader: orderLoader
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
