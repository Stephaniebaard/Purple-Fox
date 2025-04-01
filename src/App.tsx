import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomePage from "./routes/HomePage";
import MenuPage from "./routes/MenuPage";
import JokePage from "./routes/JokePage";
import FlowerPage from "./routes/FlowerPage";
import LetterPage from "./routes/LetterPage";
import PlaylistPage from "./routes/PlaylistPage";

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
      { path: "flower", element: <FlowerPage />},
      { path: "letter", element: <LetterPage />},
      { path:  "playlist", element: <PlaylistPage />},
    ],
  }
]);



function App() {
    return <RouterProvider router={router} />;
}


export default App;