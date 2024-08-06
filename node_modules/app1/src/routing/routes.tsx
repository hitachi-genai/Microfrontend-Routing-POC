import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";

export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <Page1 />,
      },
      {
        path: "page-1",
        element: <Page1 />,
      },
      {
        path: "page-2",
        element: <Page2 />,
      },
    ],
  },
];


// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Outlet,
//   Route,
// } from "react-router-dom";

// export const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<NavigationManager><Outlet /></NavigationManager>}>
//       <Route index element={<Page1 />} />
//       <Route path="page-1" element={<Page1 />} />
//       <Route path="page-2" element={<Page2 />} />
//     </Route>
//   )
// );
