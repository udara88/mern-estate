import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home,About,Signin,SignUp,Dashboard,Projects} from './pages/'
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sign-in' element={<Signin/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App