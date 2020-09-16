import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Checkbox } from 'antd';

const HostInquiryBlock = styled.div`
  padding: 5%
`;

const HostInquiry = () => {
    return (
        <HostInquiryBlock>
            문의 관리
        </HostInquiryBlock>
    )
}

export default HostInquiry;
