import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Content = styled.div`
    flex: 0 1 50%;
    margin: 3% 0 3% 3%;
    border: 1px solid black;
    height: 100%;
`;

const HostInquiryBlock = styled.div`
  padding: 4%
`;

const HostInquiry = () => {



    return (
        <>
        <Content>
            <HostInquiryBlock>
                구현 예정~^^
            </HostInquiryBlock>
        </Content>
        </>
    )
}

export default HostInquiry;
