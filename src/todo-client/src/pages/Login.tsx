import IconThemeLightDark from '../assets/IconTheme'
import useTheme from '../hooks/useTheme'
import imageLogin from '../assets/loginThumb.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoadingSvg from '../assets/IconLoading'

export default function Login () {
  const [isLoading, setLoading] = useState<boolean>(false)
  const goTo = useNavigate()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    document.title = 'Login | ToDoApp'
  }, [])

  function handleRedirect () {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      goTo('/home')
    }, 3000)
  }
  return (
    <div className={`${theme} select-none`}>
      <main className='grid sm:grid-cols-1 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 min-h-screen dark:bg-gray-700 bg-slate-200'>
        <section className='flex flex-col justify-between  dark:bg-gray-900 bg-gray-700 p-5 m-5 rounded-lg text-white  '>
          <h1 className='font-bold text-3xl'>ToDoApp</h1>
          <img
            src={imageLogin}
            alt='login-thumbail'
            className='max-h-[75%] max-w-[75%] self-center'
            draggable='false'
          />
          <button
            className='text-3xl cursor-pointer hover:opacity-75 w-fit'
            onClick={toggleTheme}
            onContextMenu={e => {
              e.preventDefault() // Avoid context menu
            }}
          >
            <IconThemeLightDark />
          </button>
        </section>
        <section className='grid place-content-center gap-5 dark:bg-gray-700 bg-white dark:border-2 border-gray-500 p-5 m-5 rounded-lg'>
          <h1 className='mb-2 text-6xl font-medium text-gray-900 dark:text-white'>
            Sign in
          </h1>
          <form
            onSubmit={e => {
              e.preventDefault()
              handleRedirect()
            }}
            className='min-w-full flex flex-col gap-3'
          >
            <div className='mb-5'>
              <label
                htmlFor='username'
                className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'
              >
                Your username
              </label>
              <input
                type='text'
                id='username'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='john.doe123'
                required
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='password'
                className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'
              >
                Your password
              </label>
              <input
                type='password'
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='***********'
                required
              />
            </div>
            <button
              className='flex justify-evenly items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
               font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              disabled={isLoading}
              // onClick={handleRedirect}
            >
              {isLoading ? <LoadingSvg>Verifying </LoadingSvg> : 'Login'}
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}
