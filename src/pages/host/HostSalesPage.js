import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostForm from '../../components/common/host/HostForm';
import HostSales from '../../components/host/HostSales';

function HostSalesPage() {
    return (
        <>
        <HeaderContainer />
        <HostForm>
            <HostSales />
        </HostForm>
        </>
    )
}

export default HostSalesPage;
