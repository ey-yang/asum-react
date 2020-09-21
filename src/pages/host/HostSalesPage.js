import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostSales from '../../components/host/HostSales';

function HostSalesPage() {
    return (
        <>
         <HeaderContainer />
            <HostTemplate>
                <HostSales />
            </HostTemplate>
        </>
    )
}

export default HostSalesPage;
