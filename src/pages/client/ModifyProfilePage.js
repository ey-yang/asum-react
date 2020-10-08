import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import ModifyProfileContainer from '../../containers/client/user/ModifyProfileContainer';
import Footer from '../../components/common/Footer';


const ModifyProfilePage = () => {
    return (
        <>
            <HeaderContainer />
            <ModifyProfileContainer />
            <Footer />
        </>
    );
};

export default ModifyProfilePage;