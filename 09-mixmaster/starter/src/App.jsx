import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  HomeLayout,
  Error,
  Landing,
  Newsletter,
  Cocktail,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },

      { path: "/cocktail", element: <Cocktail /> },
      { path: "/newsletter", element: <Newsletter /> },
      { path: "*", element: <Error /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
