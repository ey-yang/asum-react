import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const Content = styled.div`
    flex: 0 1 80%;
    margin: 3% 0 3% 3%;
    border: 1px solid black;
    height: 100%;
`;

const HostInquiryBlock = styled.div`
  padding: 2%;
  .site-card-border-less-wrapper {
    padding: 10px;
    background: #ececec;
  }
`;



const HostInquiry = () => {



    return (
        <>
        <Content>
            <HostInquiryBlock>
            <div className="site-card-border-less-wrapper">
                <Card size="large" title="Card title" bordered={false} style={{ width: '50%' }}>
                Card contentsssssddddddqdddddddsawewqewqewqewqeqwewqewqewqewqewqewqewqewqwasdasdasdasdasdsadsa
                <p>Card content</p>
                <p>Card content</p>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper">
                <Card size="large" title="Card title" bordered={false} style={{ width: '50%' }}>
                Card contentsssssddddddqdddddddsawewqewqewqewqeqwewqewqewqewqewqewqewqewqwasdasdasdasdasdsadsa
                <p>Card content</p>
                <p>Card content</p>
                </Card>
            </div>
            </HostInquiryBlock>
        </Content>
        </>
    )
}

export default HostInquiry;
