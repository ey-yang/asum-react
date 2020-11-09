import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MultipleImageUploadBlock = styled.div`
    img {
        max-width: 100px;
        padding: 5px;
    }
`;


export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
        const formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append('images', this.state.file);
        return axios.post("/api/tours/create/images", formData, config).then(res => {
            alert('성공')
        }).catch(err => {
            alert('실패')
        })
    }

    

    render() {

        /* const renderPhotos = (e) => {
            return e.target.files.map((photo) => {
              return <img src={photo} key={photo} />
            })
          } */

        return (
            <MultipleImageUploadBlock>
                <form>
                    <div className="form-group multi-preview">
                        {(this.fileArray || []).map(url => (
                            <img src={url} alt="..." />
                        ))}
                    </div>
                    {/* <div className="result">
                        {renderPhotos(this.state)}
                    </div> */}

                    <div className="form-group">
                        <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                    </div>
                    <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
                </form >
            </MultipleImageUploadBlock>
        )
    }
}