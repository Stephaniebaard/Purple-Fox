import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomePage from "./routes/HomePage";
import MenuPage from "./routes/MenuPage";
import JokePage from "./routes/JokePage";

const onButtonClick = () => {
  console.log("Button clicked!");
};

const router = createBrowserRouter([
  {
    path: "/",
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "menu", element: <MenuPage onButtonClick={onButtonClick} /> },
      { path: "jokes", element: <JokePage />},
    ],
  }
]);



function App() {
    return <RouterProvider router={router} />;
}


export default App;