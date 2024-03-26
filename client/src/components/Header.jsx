import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
   <header className='bg-slate-200'>
    <nav className='flex justify-between items-center max-w-6xl mx-auto p-3'>
     <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
      <span className='text-slate-500'>Sahand  </span> 
      <span className='text-slate-700'> Estate</span>
     </h1>
     
     <form className='flex items-center  bg-slate-100 rounded-lg p-2'>
      <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none border-none w-24 sm:w-64 '/>
      <FaSearch/>
     </form>
     <ul className='sm:flex gap-4  hidden'>
      <Link to='/' className='hidden sm:inline text-slate-700 hover:underline'>Home</Link>
      <Link to='/about' className='hidden sm:inline text-slate-700 hover:underline'>About</Link>
      <Link to='/sign-in' className='hidden sm:inline text-slate-700 hover:underline'>Sign in</Link>
     </ul>
    </nav>
   </header>
  )
}

export default Header