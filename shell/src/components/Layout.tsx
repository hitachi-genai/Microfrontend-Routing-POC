import React, { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { app1RoutingPrefix, app2RoutingPrefix } from "../routing/constants"

export function Layout() {
  let mLOPsWindow: any

  const openWindow = () => {
    if (!mLOPsWindow || mLOPsWindow.closed) {
      mLOPsWindow = window.open("http://localhost:8081/", "blank")
      alert("Window opened:")
    }
  }

  const Logout = () => {
    if (mLOPsWindow && !mLOPsWindow.closed) {
      mLOPsWindow.postMessage("SingleSignOut", "http://localhost:8081/")
    } else {
      alert("mLOPsWindow is not open.")
    }
  }

  useEffect(() => {
    openWindow()

    return () => {
      if (mLOPsWindow) {
        mLOPsWindow.close()
      }
    }
  }, [])
  return (
    <>
      <button onClick={Logout}>logout</button>
      <nav
        style={{
          marginBottom: "3rem",
          display: "flex",
          justifyContent: "center",
          marginTop: 150,
        }}
      >
        <Link
          to={`/${app1RoutingPrefix}/page-1`}
          style={{ marginRight: "1rem" }}
        >
          App1 Page1
        </Link>
        <Link
          to={`/${app1RoutingPrefix}/page-2`}
          style={{ marginRight: "1rem" }}
        >
          App1 Page2
        </Link>
        <Link
          to={`/${app2RoutingPrefix}/page-a`}
          style={{ marginRight: "1rem" }}
        >
          App2 PageA
        </Link>
        <Link to={`/${app2RoutingPrefix}/page-b`}>App2 PageB</Link>
      </nav>
      <Outlet />
    </>
  )
}
