
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import NotFound from "./components/NotFound"
import "./App.css"
import { Toaster } from "react-hot-toast"
import Header from "./components/header"
import Home from "./components/home"
import Login from "./components/login"
import Register from "./components/Register"
import ListMusic from "./components/ListMusic"
import ManageMusic from "./components/ManageMusic"
import AddMusic from "./components/AddMusic"

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
       
        <Header />
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />

          <Route element={<Home></Home>} path="homepage" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<ListMusic></ListMusic>} path="ListMusic" />
          <Route element={<AddMusic/>} path="addmusic" />
          <Route element={<ManageMusic></ManageMusic>} path="ManageMusic" />
          <Route element={<Register />} path="register" />
          <Route element={<ListMusic />} path="browse" />
          {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App