import { Button, Input } from '@nextui-org/react';
import NavBar from './NavBar';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URI } from './Constant';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [email , setEmail] = useState<string >();  
    const [password , setPassword] = useState<string>();
    const navigate = useNavigate();
    console.log(email);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (e : any) => {

    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      const  {data} = await axios.post(BASE_URI+"/login", {
        email , password
      })
      localStorage.setItem("admin" , JSON.stringify(data));
      navigate("/dashboard");
    } catch (error  ) {error}
  }

  return (
    <>
    
    <div className=''>
        <div className='custom-class'>
          <img src='robot.jpg' alt='' />
        </div>
          <NavBar />
          <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center border-2 rounded-xl border-gray-500 w-[400px] h-[300px]'>
                  <form className='flex flex-col w-full  justify-center items-center' onSubmit={handleLogin}>
                    <div className='w-full px-6 my-2'>
                      <label className='w-full text-lg text-gray-400'>Email</label>
                      <Input variant='underlined' value={email} onChange={e => setEmail(e.target.value)}  className='w-full text-xl' size='lg' color='primary' placeholder='Enter your email' />
                    </div>
                    <div className='w-full px-6 my-2'>
                      <label className='w-full text-lg text-gray-400'>Password</label>
                      <Input variant='underlined' value={password} onChange={e => setPassword(e.target.value)} className='w-full' size='lg' color='primary' placeholder='Enter your password' />
                    </div>
                    <Button type='submit' className='text-lg font-medium custom-bg py-6 my-3 bg-gray-700 text-gray-300' onPress={handleLogin}>Authenticate</Button>
                  </form>
              </div>
          </div>
    </div>
    </>
  )
}

export default Login