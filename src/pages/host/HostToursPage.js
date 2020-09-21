import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostToursContainer from '../../containers/host/HostToursContainer';

const HostToursPage = () => {
    return (
        <>
        <HeaderContainer />
        <HostTemplate>
            <HostToursContainer />
        </HostTemplate>
        </>
    )
}

export default HostToursPage;
