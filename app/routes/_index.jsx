import React, {useState} from "react"
import { useLoaderData } from "@remix-run/react"
import NavBar from "../containers/Navbar"
import Home from "../pages/home"
import ChangeLog from "../containers/changelog/ChangeLog"
import Privacy from "../pages/privacy"
import GettingStarted from "../containers/getting-started/GettingStarted"
import "../../styles.scss"
import "@shopify/polaris/build/esm/styles.css";

export const meta = () => {
  return [
    { title: "Fontaine Software" },
    { name: "description", content: "Fontaine Software Site" }
  ]
}

export const clientLoader = async ({ request }) => {
  return new URL(request.url).searchParams.get("param");
}

export default function Index() {
  const [page, setPage] = useState(useLoaderData() ?? "home")
  return (
    <>
    <NavBar route={page} setPage={setPage} />
    {page === "home" ? 
      <Home setPage={setPage} />
    :
    page === "changelog" ?
      <ChangeLog /> 
    :
    page === "gettingstartedsku" ?
      <GettingStarted />
    :
      <Privacy />
    }
    </>
  )
}
