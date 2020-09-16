import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostForm from '../../components/common/host/HostForm';
import HostInfo from '../../components/host/HostInfo';


function HostInfoPage() {
    return (
    <>
    <HeaderContainer />
    <HostForm>
        <HostInfo />
    </HostForm>
    </>
    )
}

export default HostInfoPage;