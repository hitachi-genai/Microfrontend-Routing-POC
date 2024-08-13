import React, { lazy, Suspense } from "react";
import {
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "../components/Layout";
import { app1RoutingPrefix, app2RoutingPrefix } from "./constants";

const App1Lazy = lazy(() => import("../components/App1"));
const App2Lazy = lazy(() => import("../components/App2"));

export const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={`/${app1RoutingPrefix}`} />} />
      <Route
        path={`/${app1RoutingPrefix}/*`}
        element={
          <Suspense fallback="Loading App1...">
            <App1Lazy />
          </Suspense>
        }
      />
      <Route
        path={`/${app2RoutingPrefix}/*`}
        element={
          <Suspense fallback="Loading App2...">
            <App2Lazy />
          </Suspense>
        }
      />
    </Route>
  );