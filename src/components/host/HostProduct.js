import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Checkbox } from 'antd';

const HostProductBlock = styled.div`
  padding: 5%
`;

const HostProduct = () => {
    return (
        <HostProductBlock>
            상품 관리
        </HostProductBlock>
    )
}

export default HostProduct;
