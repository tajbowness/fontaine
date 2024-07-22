/* eslint-disable react/prop-types */
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react"
import NavBar from "./comps/Navbar"
import "../styles.scss"
import { useLoaderData } from "@remix-run/react"

export const clientLoader = async ({ request }) => {
  return request.url.split('fontaine/')[1]
}

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}


export default function App() {
  return (
    <div className="main">
      <div className="main-content">
        <NavBar route={useLoaderData()} />
        <Outlet />
      </div>
    </div>
)
}

export function HydrateFallback() {
  return <p>Loading...</p>
}
