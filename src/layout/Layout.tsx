import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { Navbar } from "../components/navbar/Navbar"

export const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />     
    </>
  )
}

