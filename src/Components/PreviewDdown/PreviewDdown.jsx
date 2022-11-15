import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

// getting id from cookies
const user = document.cookie.split('=')[1];
const userObj = user && JSON.parse(user);
console.log(userObj?.id);



const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


let base64String = "";

function imageUploaded(files, setLoading, navigate, setFileUpload, setLoadingPercentage) {
  for (let i = 0; i < files.length; i++) {
    setLoading(true);
    const reader = new FileReader();
    reader.readAsDataURL(files[i]);

    // getting file name and type
    const fileName = files[i].name;
    const fileType = files[i].type;

    // eslint-disable-next-line no-loop-func
    reader.onload = () => {
      base64String = reader.result;
      // console.log(base64String);
      const data = {
        image: base64String,
        userId: userObj.id,
        fileName: fileName,
        fileType: fileType
      }
      axios.post(`https://rsquare-auth.herokuapp.com/images/${userObj.id}`, data)
        .then(res => {
          console.log(res);
          setLoading(false);
          navigate("/")
          window.location.reload()
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })

    };
    base64String = "";
    console.log("done")

    setFileUpload(i + 1);

    // calculating percentage in basis of total files
    const percentage = Math.round((i + 1) / files.length * 100);
    console.log(percentage);
    setLoadingPercentage(percentage);


    reader.onerror = (error) => {
      console.log('Error: ', error);
    }
  }
}




export function Previews(props) {
  const [acceptImage, setAcceptImage] = useState([]);
  const [files, setFiles] = useState([]);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [fileUpload, setFileUpload] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      setAcceptImage(acceptedFiles);
      // imageUploaded(acceptedFiles);
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt="preview"
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <section
        className="container mb-5 mx-auto  cursor-pointer border-dotted border-2 py-8 flex justify-center flex-col items-center"
        style={{
          transition: 'all 0.5s ease-in-out',
        }}
      >
        {files.length > 0 ? null : (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p className='text-center'>Drag Files Here</p>
            <br />
            <p className='text-center'>Or</p>
            <br />
            <button className=' hover:bg-Bluish hover:text-white  text-Bluish py-2 px-6 rounded-md border-2 border-Bluish'>
              <span className='flex flex-row'>
                Browse
              </span>
            </button>
          </div>
        )}
        <aside style={thumbsContainer}>
          {thumbs}
          {console.log(files)}
        </aside>
      </section>
      {/* loader */}
      {loading && (
        <>
          <div class="w-full bg-grey400 shadow-sm rounded-full h-2.5 mb-2 dark:bg-grey700">
            <div class="bg-Bluish h-2.5 rounded-full dark:bg-Bluish" style={{ width: { loadingPercentage } }}></div>
          </div>
          <div className="flex justify-between">
            <div className="text-center text-sm text-grey700">
              {fileUpload} /   {files.length}   uploaded
            </div>
            {/* time remaining */}
            <div className="flex flex-col mb-2 items-center">
              <div className="text-grey700 text-sm text-center">
                Time Remaining:


                00:00:00

              </div>
            </div>
          </div>
        </>
      )}


      {/* Add more and upload button to the right */}
      <div className='flex flex-row justify-end '>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <button className=' hover:bg-Bluish hover:text-white  text-Bluish py-2 px-6 rounded-md border-2 border-Bluish'>
            <span className='flex flex-row'>
              Add More
            </span>
          </button>
        </div>
        <button className=' bg-Bluish text-white py-2 px-6 rounded-md border-2 border-Bluish ml-5'
          onClick={() => {
            imageUploaded(acceptImage, setLoading, navigate, setFileUpload, setLoadingPercentage);
            // navigate("/")
          }}
        >
          <span className='flex flex-row'>
            Upload
          </span>
        </button>
      </div>

    </>
  );
}
