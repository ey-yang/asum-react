import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import AccountContainer from '../containers/client/user/AccountContainer';
import Footer from '../components/common/Footer';


const AccountPage = () => {
    return (
        <>
            <HeaderContainer />
            <AccountContainer />
            <Footer />
        </>
    );
};

export default AccountPage;