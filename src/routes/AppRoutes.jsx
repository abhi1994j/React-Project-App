import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import FormValidation from "../pages/FormValidation"
import AddtoCart from "../pages/AddtoCart"
import TodoList from "../pages/TodoList"
import Weather from "../pages/Weather"
import Footer from "../components/Footer"

const Approutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
              <Route path="/" element={<TodoList/>}/>
              <Route path="/addtocart" element={<AddtoCart/>}/>
              <Route path="/todo" element={<FormValidation/>}/>
              <Route path="/weather" element={<Weather/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default Approutes