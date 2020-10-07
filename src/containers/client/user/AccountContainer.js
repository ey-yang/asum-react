import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Account from '../../../components/client/user/Account';
import { readAccount, unloadAccount } from '../../../modules/account';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


const AccountContainer = ({ match }) => {

    // 프로필 사진 등록
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

    // user 계정 읽기 API 요청
    const { userId } = match.params;
    const dispatch = useDispatch();
    const { user } = useSelector(
        ({ user }) => ({
            user: user.user
        }),
    );

    useEffect(() => {
        dispatch(readAccount(userId));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
          dispatch(unloadAccount());
        };
      }, [dispatch, userId]);


    return (
        <>
        <Account 
            onChangeImage={onChangeImage}
            profileImage={profileImage}
            user={user}
        />
        </>
    )
}

export default withRouter(AccountContainer);