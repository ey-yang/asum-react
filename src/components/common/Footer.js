import React from 'react';
import styled from 'styled-components';


import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import { Row, Col } from 'antd';

const FooterBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FooterBox = styled.div`
    width: 910px;
`;

const Footer = () => {
    return(
        <FooterBlock>
            <FooterBox>
                <Row>
                    <Col span={12}>col-6</Col>
                    <Col span={4}>col-6</Col>
                    <Col span={4}>col-6</Col>
                    <Col span={4}>col-6</Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </ FooterBox>
        </FooterBlock>
    )
}

export default Footer;