import React, { useState } from 'react';
import Account from '../../../components/guest/user/Account';
import axios from 'axios';


const AccountContainer = () => {

    const [profileImage, setProfileImage] = useState(null);
    const onChangeImage = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setProfileImage(reader.result);
                }
            }
            console.log(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
        const formData = new FormData();
        formData.append('images', e.target.files[0]);
        
        return axios.post("/api/user/image", formData).then(res => {
            alert('성공')
          }).catch(err => {
            alert('실패')
          })
    };

    return (
        <>
        <Account 
            onChangeImage={onChangeImage}
            profileImage={profileImage}
        />
        </>
    )
}

export default AccountContainer;