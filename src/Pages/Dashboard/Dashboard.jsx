import React, { useEffect, useState } from 'react'
import dashBg from '../../assets/dashboardBg.png'
import { AiFillDelete, AiOutlinePlusCircle } from 'react-icons/ai'
import { Previews } from '../../Components/PreviewDdown/PreviewDdown'
import axios from 'axios'

const Dashboard = () => {
  const [show, setShow] = useState(false)
  const [showdelete, setShowDelete] = useState(false)

  // getting id from cookies
  const user = document.cookie.split('=')[1]
  const userObj = JSON.parse(user)

  const [image, setImage] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/images/${userObj.id}`).then(res => {
      setImage(res.data.images)
    })
      .catch(err => {
        console.log(err);
      })
  }, [userObj.id])

  return (
    <div className='bg-white'>
      {/* Navbar */}
      <nav className='flex justify-between mt-6 px-10'>
        <div className=' text-4xl font-semibold flex '>
          Media Library
        </div>
        <div >
          <button className='bg-Bluish hover:bg-Bluish text-white py-2 px-4 rounded-lg' onClick={
            () => setShow(!show)
          }>
            <span className='flex flex-row'>
              <AiOutlinePlusCircle className='w-6 h-7 mr-2' />
              Upload new Image
            </span>
          </button>
          {showdelete&&
          <button className='bg-Bluish hover:bg-Bluish text-white py-2 px-4 rounded-lg' 
      >
            <span className='flex flex-row'>
              <AiFillDelete className='w-6 h-7 mr-2' />
              Delete Selected
            </span>
          </button>
          }
        </div>
  
      </nav>
      <p className='text-gray-500 text-sm px-10 mt-2'>{image.length} Images</p>
      {/* Page Content */}

      {image.length > 0 ? (
        // display images in 3 columns
        
        <div className='grid grid-cols-4 gap-10 px-20 mt-10'>
          {show ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative m-6 mx-auto w-8/12 h-80">
                  {/*content*/}
                  <div className="border-0 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-3 border-b border-solid border-grey300">
                      <h3 className="text-lg font-semibold">
                        Upload new images</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-grey700  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShow(false)}
                      >
                        <span className="bg-transparent text-grey700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Previews />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-grey700"></div>
            </>
          ) : null}
          {image.map((img, index) => (
            <div className='px-2 py-2 bg-white rounded-lg shadow-xl border border-grey400'>
              <div className=' float-left'>
                <input type='checkbox' className='  mt-1 mr-2 w-5 h-5'
                  // get value of checkbox
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(img._id);
                    setShowDelete(e.target.checked)
                  }}

                />
              </div>
              <img src={img.image} alt='img' key={index} className='2xl:h-48 2xl:w-52 rounded-lg' />
            {/* file name and type  */}
            <hr className='text-grey500 mb-2' />
            {/* checkbox to delete image in top left and image*/}
              <div className=' flex flex-row justify-between mt-2'>
              <div className='text-sm font-semibold text-gray-500'>
                {img.fileName}
                </div>
              <div className='text-sm font-semibold text-gray-500 bg-lightGreen bg-opacity-20 rounded-xl py-0.5 px-4'>
                {img.fileType}
                </div>
                </div>
          </div>
          ))}
        </div>

      ) : (
        <>
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8' style={{
        backgroundImage: `url(${`${dashBg}`})`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        backgroundPosition: 'center',
              height: '80vh'
            }}>
        {show ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative m-6 mx-auto w-8/12 h-80">
                {/*content*/}
                <div className="border-0 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-3 border-b border-solid border-grey300">
                  <h3 className="text-lg font-semibold">
                   Upload new images</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-grey700  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShow(false)}
                    >
                      <span className="bg-transparent text-grey700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                  <Previews/>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-grey700"></div>
          </>
        ) : null}
      </div>
          <p className='text-base text-center -mt-20 text-grey700'>Click on ‘Upload’ to start adding images</p>
        </>
      )}


    </div>
  )
}

export default Dashboard
