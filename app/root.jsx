/* eslint-disable react/prop-types */
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react"
import { useEffect } from 'react';
import "../styles.scss"

export const clientLoader = async ({ request }) => {
  return request.url.split('fontaine/')[1]
}

export function Layout({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8ELQF312TZ');
    `;
    document.head.appendChild(script);
  }, []);

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
        <Outlet />
      </div>
    </div>
)
}

export function HydrateFallback() {
  return <p>Loading...</p>
}
