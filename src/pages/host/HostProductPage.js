import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostForm from '../../components/common/host/HostForm';
import HostProduct from '../../components/host/HostProduct';

function HostProductPage() {
    return (
        <>
        <HeaderContainer />
        <HostForm>
            <HostProduct />
        </HostForm>
        </>
    )
}

export default HostProductPage;
