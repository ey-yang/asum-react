import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import AccountContainer from '../containers/guest/user/AccountContainer';
import ImgUploadContainer from '../containers/write/ImgUploadContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonsContainer';

const AccountPage = () => {
    return (
        <>
            <HeaderContainer />
            <AccountContainer />
        </>
    );
};

export default AccountPage;