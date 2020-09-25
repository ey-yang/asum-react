import React, { useState } from 'react';
import { writeImage, changeField, initializeForm } from '../../../modules/account';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Row, Col, DatePicker, Select } from 'antd';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import palette from '../../../lib/styles/palette';

const AccountBlock = styled(Responsive)`
    margin-top: 4rem;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    .namebox {
        margin: 1rem 0rem 1rem 0rem;
    }
    .description {
        margin: 1rem 0rem 1rem 0rem;

    }
    
`;

const PicBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${palette.gray[3]};
    padding: 2rem;
    width: 320px;
    background: white;
    border-radius: 2px;
    margin: 4.46rem 0rem 0rem 1rem;
`;

const DescripBox = styled.div`
    margin-left: 3rem;
`;



const Account = () => {
    return (
        <AccountBlock>
            <Row>
                <Col span={8}>
                    <PicBox>

                    </PicBox>
                </Col>

                <Col span={16}>
                    <DescripBox>
                        프로필 관리
                        <Row>
                            <Col span={5} className="namebox">
                                이름
                            </Col>
                            <Col span={19} className="description">
                                양은열
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5} className="namebox">
                                이름
                            </Col>
                            <Col span={19} className="description">
                                양은열
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5} className="namebox">
                                이름
                            </Col>
                            <Col span={19} className="description">
                                양은열
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5} className="namebox">
                                이름
                            </Col>
                            <Col span={19} className="description">
                                양은열
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5} className="namebox">
                                이름
                            </Col>
                            <Col span={19} className="description">
                                양은열
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5} className="namebox">
                                이름
                            </Col>
                            <Col span={19} className="description">
                                양은열
                            </Col>
                        </Row>
                    </DescripBox>
                </Col>
            </Row>
        </AccountBlock>
    )

};

export default Account;