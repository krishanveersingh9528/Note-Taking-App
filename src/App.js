
import React from 'react'
import NavBar from './Componenets/NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from './Componenets/Login'
import Signup from './Componenets/Signup'
import Home from './Componenets/Home'
import AddNote from './Componenets/AddNote'
import EditNote from './Componenets/EditNote'

const App = () => {
  return (
    <div>
         <NavBar/>
         
         <main>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/nav' element={<NavBar/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/addNote' element={<AddNote/>} />
            <Route path='/editnote' element={<EditNote/>} ></Route>

          </Routes>

         </main>
    </div>
  )
}

export default App