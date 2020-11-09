import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';


  const UploadMultipleImageBlock = styled.div`
  /* .app{
    min-height: 100vh;
    max-height: auto;
    background-color: #1e1e1e;
  }
  .heading{
    text-align: center;
    font-family: 'Alice', serif;
    font-size: 2rem;
    font-weight: bold;
    color: #f7f7f7;
    padding-top: 2rem;
  } */
  #file[type="file"] {
    display: none;
  }
  .label-holder {
    width: 100%;
    height: 50px;
    margin-top: 3em;
    display: grid;
    place-items: center;
    
  }
  .label{
    height: 50px;
    width: 200px;
    background-color:#2a3eb1;
    color: white;
    display: grid;
    place-items: center;
    font-size: 2.5rem ;
    cursor: pointer;
    
  }
  
  .result{
    min-height: 100%;
    max-height: auto;
    width: 100%;
    background-color: #272c34;
    margin-top:1rem ;
     display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left; 
    
  }
  
  img{
    width: 320px;
    height: 180px;
    object-fit: cover;
    padding: 0.75rem;
    
  }
`;

const UploadMultipleImage = () => {

  const [selectedImages, setselectedImages] = useState([])

  const imageHandleChange = (e) => {
      /* console.log(e.target.files) */
      if(e.target.files){
        const fileArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file))
        setselectedImages((prevImages)=>prevImages.concat(fileArray))
      }
      
      const formData = new FormData();
      const config = {
        header: { 'content-type': 'multipart/form-data' }
      }
      formData.append('images', e.target.files[0]);
      axios.post("/api/tours/create/images", formData, config).then(res => {
        alert('성공')
      }).catch(err => {
        alert('실패') 
      })
      /* console.log(Array); */
      /* console.log(selectedImages)  */
  }



  /* const TourImages = document.getElementById('files'); 
  const formData = new FormData();



  for( let i=0; i <= TourImages.files.length; i++){
    formData.append('images', TourImages.files[i]);

  }*/
  

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img src={photo} key={photo} />
    })
  } 

  const TourImages = selectedImages;

  const onPublish = (e) => {
    e.preventDefault()
    console.log(TourImages)

    /* const formData = new FormData();
    formData.append('images', TourImages);
    return axios.post("/api/tours/create/images", formData).then(res => {
              alert('성공')
            }).catch(err => {
              alert('실패')
            }) */
  }

  return (
    <UploadMultipleImageBlock>
      <div className="app">
        <div className="heading">
          <h1>React Multiple Images Preview</h1>
        </div>
        <div>
          <input 
            type="file"
            multiple
            /* key="images" */
            name="images"
            /* value="images" */
            id="file"
            onChange={imageHandleChange}
          />
          <div className="label-holder">
            <label htmlFor="file" className="label">
              
            </label>
          </div>
          <div className="result">
            {renderPhotos(selectedImages)}
          </div>
        </div>
        <button type="button" className="btn btn-danger btn-block" onClick={onPublish}>Upload</button>
      </div>
    </UploadMultipleImageBlock>
  )
};

export default UploadMultipleImage;