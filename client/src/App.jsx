import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home,About,Signin,SignUp,Profile} from './pages/'
import Header from './components/Header'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sign-in' element={<Signin/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
     
     </Routes>
    </BrowserRouter>
  )
}

export default App