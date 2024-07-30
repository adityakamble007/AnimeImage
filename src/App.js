import "./App.css";
import RandomImg from "./components/RandomImg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <RandomImg />
        </>
      ),
    },
  ]);

  return (
    <div className="w-screen bg-gray-500">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
