import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthForm from '../../components/guest/auth/AuthForm';
import HeaderContainer from '../../containers/common/HeaderContainer';

const RegisterSelectPage = () => {
    return (
        <>
        <HeaderContainer />
        <AuthTemplate>
            <AuthForm type="registerSelect" />
        </AuthTemplate>
        </>
    );
};

export default RegisterSelectPage;