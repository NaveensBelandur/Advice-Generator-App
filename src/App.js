import React from 'react'
import './Styling/App.css'
import Users from './component/Users'
import Advice from './component/Advice'
import Post from './component/Post'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App (){
    return (
        <div>
            <BrowserRouter>
            <nav class='navbar'>
                <ul class='nav'>
                    <li><a href='/Advice'>Advice</a></li>
                    <li><a href='/Users'>Users</a></li>
                    <li><a href='/Post'>Post</a></li>
                </ul>
            </nav>
            <Routes>
            <Route path='/' element={<Users/>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route path='/Advice' element={<Advice/>}/>
            <Route path='/Post' element={<Post/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App