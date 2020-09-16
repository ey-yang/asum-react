import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostForm from '../../components/common/host/HostForm';
import HostInquiry from '../../components/host/HostInquiry';

function HostInquiryPage() {
    return (
        <>
        <HeaderContainer />
        <HostForm>
            <HostInquiry />
        </HostForm>
        </>
    )
}

export default HostInquiryPage;
