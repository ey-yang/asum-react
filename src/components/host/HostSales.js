import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Checkbox } from 'antd';

const HostSalesBlock = styled.div`
  padding: 5%
`;

const HostSales = () => {
    return (
        <HostSalesBlock>
            판매 관리
        </HostSalesBlock>
    )
}

export default HostSales;
