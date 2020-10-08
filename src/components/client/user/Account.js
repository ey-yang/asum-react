import React, { useState, useRef, useCallback } from 'react';
import { writeImage, changeField, initializeForm } from '../../../modules/account';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import palette from '../../../lib/styles/palette';
import { UserOutlined } from '@ant-design/icons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Image, Row, Col, DatePicker, Select, Avatar } from 'antd';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Switch } from 'antd';

const AccountBlock = styled(Responsive)`
    margin-top: 4rem;
    padding: 0rem 8.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    .namebox {
        margin: 1.5rem 0rem 1.5rem 0rem;
        font-size: 0.96rem;
        font-weight: 500;
    }
    .description {
        margin: 1.5rem 0rem 1.5rem 0rem;
        font-size: 0.99rem;
        font-weight: 500;
        /* border-left: 1px groove ${palette.gray[3]}; */
    }
    .uploadBtn {
        margin: 0.1rem 0rem 0.8rem 0rem;
        font-size: 0.8rem;
        text-decoration: underline ${palette.gray[6]};
        &:hover {
            color: ${palette.gray[5]};
            background: none;
        }
    }
    
`;

const PicBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${palette.gray[4]};
    padding: 2rem;
    width: 270px;
    background: white;
    border-radius: 8px;
    /* margin: 4.46rem 0rem 0rem 1rem; */
   /*  justify-content: center; */
    align-items: center;
`;

const PointCoupon = styled.div`
    margin: 0.5rem 0rem;
    justify-content: space-between;
    display: flex;
    width: 80%;
    font-size: 0.98rem;
    font-weight: 450;
    .pointCoupon {
        display: flex;
    }
    .pocouTitle {
        margin-left: -0.7rem;
    }
`;

const PersonalMenu = styled.div`
    margin: 0.7rem 0rem;
    display: flex;
    width: 80%;
    font-size: 0.98rem;
    font-weight: 450;
    align-items: center;
    .menuTitle {
        margin-left: -0.7rem;
    }
`;

const DescripBox = styled.div`
    /* margin-left: 5rem; */
    padding-left: 2rem;
    .profileTitleBox {
        display: flex;
        justify-content: space-between;
    }
    .profileTitle {
        margin-bottom: 2rem;
        font-weight: 900;
        font-size: 1.4rem;
    }
    .modifyBtn {
        border: 1px solid ${palette.gray[4]};
        font-size: 0.75rem;
        color: ${palette.gray[7]};
        &:hover {
            color: ${palette.gray[5]};
            background: none;
            font-size: 0.75rem;
        }
    }
    .kakao {
        display: flex;
        justify-content: space-between;
    }
    .marketing {
        margin-bottom: 0.7rem;
    }
`;


const Account = ({ profileImage, onChangeImage, user, onEdit }) => {

    const imageInput = useRef();//이미지 업로드를 위한 설정
    const onClickImageUpload = useCallback((e) => { //이미지 업로드 버튼
        e.preventDefault();
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <AccountBlock>
            <Row>
                <Col span={9}>
                    <PicBox>
                        
                        {profileImage !== null ? <Avatar size={120} src={profileImage} /> : <Avatar size={120} icon={<UserOutlined />} />}
                        

                        <input type="file" hidden ref={imageInput} name="profileImage" onChange={onChangeImage} />

                        <Button disableFocusRipple disableRipple aria-controls="simple-menu" aria-haspopup="true"  className="uploadBtn" onClick={onClickImageUpload}>
                            사진 업로드
                        </Button>
                        <hr width="100%" color="#DEE2E6" size="1"/>
                        <PointCoupon>
                            <div className="pointCoupon">
                                <ListItemIcon>
                                    <MonetizationOnOutlinedIcon />
                                </ListItemIcon>
                                <div className="pocouTitle">
                                    포인트
                                </div>
                            </div> 
                            <div>0P</div> 
                        </PointCoupon>
                        <PointCoupon>
                            <div className="pointCoupon">
                                <ListItemIcon>
                                    <ConfirmationNumberOutlinedIcon />
                                </ListItemIcon>
                                <div className="pocouTitle">
                                    쿠폰
                                </div>
                            </div>
                            <div>0장</div> 
                        </PointCoupon>
                        <hr width="100%" color="#DEE2E6" size="1"/>
                        <PersonalMenu>
                            <ListItemIcon>
                                <AssignmentOutlinedIcon />
                            </ListItemIcon>
                            <div className="menuTitle">
                                예약 내역
                            </div>
                        </PersonalMenu>
                        <PersonalMenu>
                            <ListItemIcon>
                                <ChatOutlinedIcon />
                            </ListItemIcon>
                            <div className="menuTitle">
                                여행 후기
                            </div>
                            
                        </PersonalMenu>
                        <PersonalMenu>
                            <ListItemIcon>
                                <FavoriteBorderOutlinedIcon />
                            </ListItemIcon>
                            <div className="menuTitle">
                                관심 여행
                            </div>
                            
                        </PersonalMenu>

                    </PicBox>
                </Col>

                <Col span={15}>
                    <DescripBox>
                        <div className="profileTitleBox">
                        <div className="profileTitle">
                            프로필 관리
                        </div>
                        <div>
                        <Button className="modifyBtn" onClick={onEdit}>
                            수정
                        </Button>
                        </div>
                        </div>
                        <Row>
                            <Col span={9} className="namebox">
                                이름
                            </Col>
                            <Col span={15} className="description">
                                {user.username}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={9} className="namebox">
                                이메일
                            </Col>
                            <Col span={15} className="description">
                                {user.email}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={9} className="namebox">
                                SNS 연동
                            </Col>
                            <Col span={15} className="description">
                                <div className="kakao">
                                    <div>
                                        카카오 연동
                                    </div>
                                    <Switch /* onChange={} */ />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={9} className="namebox">
                                비밀번호
                            </Col>
                            <Col span={15} className="description">
                                *********
                            </Col>
                        </Row>
                        <Row>
                            <Col span={9} className="namebox">
                                마케팅 수신동의
                            </Col>
                            <Col span={15} className="description">
                                <div className="marketing">
                                    e-mail: 수신 거부
                                </div>
                                <div className="marketing">
                                    sms: 수신 중
                                </div>
                            </Col>
                        </Row>
                        
                    </DescripBox>
                </Col>
            </Row>
        </AccountBlock>
    )

};

export default Account;