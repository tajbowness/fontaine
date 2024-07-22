import React, {useState} from "react"
import NavBar from "../comps/Navbar"
import "../../styles.scss"
import { useLoaderData } from "@remix-run/react"
import Home from "../pages/home"
import Privacy from "../pages/privacy"

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
    {page === "home" ? (
      <Home />
    ) : (
      <Privacy />
    )}
    </>
  )
}
