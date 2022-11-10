import React from 'react'
import errPage from '../../assets/404.PNG'

const ErrPage = () => {
  return (
    <div>
      <img src={errPage} alt='404' className='w-1/2 mx-auto mt-24' />
      <p className='text-center'>oops! looks like you are lost.<br/>
      </p>
    <p className='text-center'>
        The page you are looking for could not be found.</p>
    {/* back to home  */}
    <div className='flex justify-center'>
      <button className='bg-Bluish text-white px-4 py-2 rounded-lg mt-5'>
        <a href='/'>Back to Home</a>
      </button>
    </div>
    </div>
  )
}

export default ErrPage
