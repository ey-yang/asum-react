import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, socialregister } from '../../modules/auth';
import RegisterForm from '../../components/auth/RegisterForm';
import { fullAuthWithoutPassword } from '../../modules/user';
import { withRouter } from 'react-router-dom';


const SocialRegisterFormContainer = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.socialregister,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'socialregister',
                key: name,
                value
            })
        );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        console.log('환장하네');
        const { username, year, month, day, gender } = form;
        // 해당 인풋이 비어 있다면
        if ([username, year, month, day, gender].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        
        dispatch(socialregister({ username, year, month, day, gender }));
    };

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        dispatch(initializeForm('socialregister'));
    }, [dispatch]);

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if (authError) {
            // 계정명이 이미 존재할 때
            if (authError.response.status === 409) {
                setError('이미 존재하는 계정명입니다.');
                return;
            }
            // 기타 이유
            setError('회원가입 실패');
            return;
        }
        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(fullAuthWithoutPassword());
        }
    }, [auth, authError, dispatch]);

    // user 값이 잘 설정되었는지 확인
    useEffect(() => {
        if (user) {
            history.push('/'); // 홈 화면으로 이동
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage is not working');
            }
        }
    }, [history, user]); 

    return (
        <RegisterForm
            type="socialregister"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(SocialRegisterFormContainer);