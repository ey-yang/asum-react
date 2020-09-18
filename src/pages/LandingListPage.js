import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import HeaderContainer from '../containers/common/HeaderContainer';
import LandingList from '../components/tours/LandingList';
import Footer from '../components/common/Footer';



const LandingListPage = () => {
    return (
        <>
            <HeaderContainer />
            <LandingList />
            <Footer />
        </>
    );
};

export default LandingListPage;