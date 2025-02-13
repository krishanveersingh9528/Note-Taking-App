
import React from 'react'
import NavBar from './Componenets/NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from './Componenets/Login'
import Signup from './Componenets/Signup'
import Home from './Componenets/Home'
import AddNote from './Componenets/AddNote'
import EditNote from './Componenets/EditNote'
import { ToastContainer ,Bounce} from 'react-toastify'; // ✅ Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import styles
import Readnote from './Componenets/Readnote'

const App = () => {
  return (
    <div>
         <NavBar/>
         <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick={false}
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                      transition={Bounce}
            />   {/* ✅ Place it here so it works in all pages */}
         <main>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/nav' element={<NavBar/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/addNote' element={<AddNote/>} />
            <Route path='/editnote' element={<EditNote/>} ></Route>
            <Route path='/readnote' element={<Readnote/>}/>
          </Routes>

         </main>
    </div>
  )
}

export default App