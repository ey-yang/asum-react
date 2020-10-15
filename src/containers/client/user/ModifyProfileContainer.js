import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModifyProfile from '../../../components/client/user/ModifyProfile'
import { updateAccount, changeField, initialize, setOriginalAccount } from '../../../modules/client/modify';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { readAccount, unloadAccount } from '../../../modules/account';
import AccountTemplate from '../../../components/client/user/AccountTemplate';


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
    const { user, username, email, modifyError, originalUserId, modify } = useSelector(({ modify }) => ({
        user: modify.user,
        username: modify.username,
        email: modify.email,
        modifyError: modify.modifyError,
        originalUserId: modify.id,
        modify: modify.modify,
    }));

    // 계정 정보 수정하기
    const onChangeField = useCallback(payload => 
        dispatch(changeField(payload)), [
            dispatch,
        ]);
        // 언마운트될 때 초기화
        useEffect(() => {
            return () => {
                dispatch(initialize());
            };
        }, [dispatch]);

    // 계정 정보 등록
    const onPublish = () => {
        /* if (originalUserId) { */
        dispatch(updateAccount({ username, email, id: originalUserId }));
        return;
        /* } */
    };

    // 취소
    const onCancel = () => {
        history.goBack();
    };

    // 성공 혹은 실패시 할 작업
    useEffect(() => {

        if (modify) {
        console.log(modify);
        /* alert('수정되었습니다.') */
        history.push(`/account`);
        window.location.reload();
        }
        if (modifyError) {
        console.log(modifyError);
        }
        
    }, [history, modify, modifyError]); 

console.log(username)
    return (
        <>
            <AccountTemplate
                onChangeImage={onChangeImage}
                profileImage={profileImage}
                user={user}
                /* loading={loading}
                error={error} */
            >
                <ModifyProfile 
                    user={user}
                    onChangeField={onChangeField}
                    username={username}
                    email={email}
                    originalUserId={originalUserId}
                    onPublish={onPublish}
                    onCancel={onCancel}
                />
            </AccountTemplate>
        </>
    )
}

export default withRouter(ModifyProfileContainer);