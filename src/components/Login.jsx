import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login () {
    // State to hold email and password
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    

    // Handle form submission
 const handleSubmit = (e) => {
  e.preventDefault()
  if (email && password) {
    
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userPassword', password)
    alert('Login successful!')
    navigate('/calendar')
  } else {
    alert('Please enter both email and password.')
  }
}

  return (
    <>
     <div className="login-wrapper">
      <div className='flex justify-center items-center min-h-screen p-4'>
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-full max-w-sm'>
         <h2 className='text-center text-2xl font-bold mb-6'>Login</h2>
         <div className='mb-4'>
          
           <input
             type='email'
             id='email'
             className='border border-gray-300 p-2 w-full rounded'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           placeholder='Enter your email 'required/>
         </div>
         <div className='mb-4'>
      
           <input
             type='password'
             id='password'
             className='border border-gray-300 p-2 w-full rounded'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           placeholder='Enter your password' required/>
         </div>
         <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Login</button>
   
      </form>
      </div>
        </div>

     </>
  )
}

export default Login


  

