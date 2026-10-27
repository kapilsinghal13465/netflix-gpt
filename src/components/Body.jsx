import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div className="m-0 p-0">
      <RouterProvider router={appRouter} />
      {/* <Login />
      <Browse /> */}
    </div>
  );
};

export default Body;
