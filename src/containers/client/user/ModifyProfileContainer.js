import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModifyProfile from '../../../components/client/user/ModifyProfile'
import { readAccount, updateAccount, setOriginalAccount, changeField, /* initialize */ } from '../../../modules/account';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


const ModifyProfileContainer = ({ match, history }) => {

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


    const dispatch = useDispatch();
    const { username, email, user, originalUserId } = useSelector(({ user }) => ({
        username: user.username,
        email: user.email,
        user: user.user,
        originalUserId: user.originalUserId,
    }));

    // 계정 정보 수정하기
    const onChangeField = useCallback(payload => 
        dispatch(changeField(payload)), [
            dispatch,
        ]);
        // 언마운트될 때 초기화
        /* useEffect(() => {
            return () => {
                dispatch(initialize());
            };
        }, [dispatch]); */

    // 계정 정보 등록
    const onPublish = () => {
        if (originalUserId) {
        dispatch(updateAccount({ username, email, id: originalUserId }));
        return;
        }
    };
console.log(username)
    return (
        <>
        <ModifyProfile
            onChangeImage={onChangeImage}
            profileImage={profileImage}
            onChangeField={onChangeField}
            username={username}
            email={email}
            user={user}
            originalUserId={originalUserId}
            onPublish={onPublish}
        />
        </>
    )
}

export default withRouter(ModifyProfileContainer);