import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'
import { Image } from 'antd';

function FileUpload () {

  const [Images, setImages] = useState([])

  const dropHandler = (files) => {
    let formData = new FormData();

    const config = {
      header: { 'content-type': 'multipart/form-data' }
    }
    formData.append("images", files[0])

    axios.post('api/tours/create/images', formData, config)
      .then(response => {
        if (response.data.success) {
            console.log(response.data)
            setImages([...Images, response.data.fileName])
        } else {
          alert('파일을 저장하는데 실패했습니다.')
        }
      })
  }

  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <Dropzone onDrop={dropHandler}>
        {({getRootProps, getInputProps}) => (
          
            <div 
              style={{ width:300, height:240, border:'1px solid lightgray', display:'flex', alignItems:'center', justifyContent:'center'}}
              {...getRootProps()}>
              <input {...getInputProps()} />
              <AddIcon style={{ fontSize:'3rem' }} />
            </div>
          
        )}
      </Dropzone>

      <div style={{ display: 'flex', width:'350px', height: '240px', overflowX: 'scroll'}}>
          {Images.map((image, index) => (
            <div key={index}>
              <Image style={{ minWidth: '300px', width: '300px', height: '240px'}} src={`http://localhost:3000/${image}`} />
            </div>
          ) )}
      </div>
    </div>
  )
}

export default FileUpload;