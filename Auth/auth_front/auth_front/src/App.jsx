import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Reg from './page/Reg'
import Logi from './page/Logi'
import Home from './page/Home'
import Private from './comp/Private'
import Fe from './page/Fe'
function App() {
 
    // const userInfo = localStorage.getItem('token')
    
  
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Logi/>}/>
    <Route path='/reg' element={<Reg/>}/>

    <Route element={<Private/>} >
    <Route path='/home' element={ <Home/> }/>
    </Route>
    <Route path='/fe' element={<Fe/>}/>
    <Route path='*' element={<h1>Page not found</h1>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
