import { Button, Input } from '@nextui-org/react'
import NavBar from './NavBar'




const Login = () => {
  return (
    <div>
        <div className='custom-class'></div>
          <NavBar />
          <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center border-2 rounded-xl border-gray-500 w-[400px] h-[300px]'>
                  <form className='flex flex-col w-full  justify-center items-center'>
                    <div className='w-full px-6 my-2'>
                      <label className='w-full text-lg text-gray-400'>Email</label>
                      <Input variant='underlined' className='w-full text-xl' size='lg' color='primary' placeholder='Enter your email' />
                    </div>
                    <div className='w-full px-6 my-2'>
                      <label className='w-full text-lg text-gray-400'>Password</label>
                      <Input variant='underlined' className='w-full' size='lg' color='primary' placeholder='Enter your password' />
                    </div>
                    <Button type='submit' className='text-lg font-medium custom-bg py-6 my-3 bg-gray-700 text-gray-300'>Authenticate</Button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Login