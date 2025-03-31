import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomePage from "./routes/HomePage";
import MenuPage from "./routes/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "menu", element: <MenuPage /> },
    ],
  }
]);



function App() {
    return <RouterProvider router={router} />;
}


export default App;