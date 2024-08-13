import React from 'react';
import {
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import { PageA } from "../pages/PageA";
import { PageB } from "../pages/PageB";

export const routes = createRoutesFromElements(
    <Route
      path="/"
      element={
        <NavigationManager>
          <Outlet />
        </NavigationManager>
      }
    >
      <Route index element={<PageA />} />
      <Route path="page-a" element={<PageA />} />
      <Route path="page-b" element={<PageB />} />
    </Route>
  );