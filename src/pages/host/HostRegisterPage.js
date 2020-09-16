import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostForm from '../../components/common/host/HostForm';
import HostRegister from '../../components/host/HostRegister';


function HostRegisterPage() {
    return (
    <>
    <HeaderContainer />
    <HostForm>
        <HostRegister />
    </HostForm>
    </>
    )
}

export default HostRegisterPage;