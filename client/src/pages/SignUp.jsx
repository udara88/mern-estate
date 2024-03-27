import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='max-w-lg mx-auto px-4'>
      
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form className='flex flex-col gap-4 ' >
         
         <input type='text' placeholder='username' className='border p-3 rounded-lg '  id='username' />
         <input type='text' placeholder='email' className='border p-3 rounded-lg '  id='email' />
         <input type='text' placeholder='password' className='border p-3 rounded-lg '  id='password' />
          
        <button  className='bg-slate-700 text-white p-3 rounded-md hover:opacity-95 disabled:opacity-80'>Sign up</button>
        
      </form>

      <div className='flex gap-2 mt-5'>
        <p className="capitalize">have and account ?</p>
        <Link className='text-blue-700 capitalize' to="/sign-in">sign in</Link>
      </div>

    </div>
  )
}

export default SignUp