import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Account from '../components/guest/user/Account';
import ImgUploadContainer from '../containers/write/ImgUploadContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonsContainer';

const AccountPage = () => {
    return (
        <>
            <HeaderContainer />
            <Account />
        </>
    );
};

export default AccountPage;