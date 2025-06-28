import "./styles/reset.css"
import "./styles/main.css"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./layout/Layout"


export const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>        
      </Route>
    </Routes>
    </>
  )
}


