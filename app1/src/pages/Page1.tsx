import React, { useEffect } from "react"
import { Link } from "react-router-dom"

export function Page1() {
  useEffect(() => {
    const messageHandler = (event: any) => {
      if (event.origin === "http://localhost:8080") {
        if (event.data === "SingleSignOut") {
          console.log("User has logged out")
        }
      }
    }

    window.addEventListener("message", messageHandler)

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("message", messageHandler)
    }
  }, [])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 150,
      }}
    >
      <div style={{ marginBottom: 20 }}>Page 1 from App1</div>
      <Link to="/page-2">Go to Page 2</Link>
    </div>
  )
}
